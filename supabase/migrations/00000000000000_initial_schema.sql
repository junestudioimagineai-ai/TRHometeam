-- Initial Supabase Schema
-- Thomas Rhett Enterprise Fan Community Platform

-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- 1. ENUMS
create type user_role as enum ('guest', 'fan', 'premium', 'moderator', 'admin', 'superadmin');
create type membership_tier as enum ('free', 'silver', 'gold', 'vip');
create type subscription_status as enum ('active', 'past_due', 'canceled', 'unpaid', 'trialing');
create type ticket_status as enum ('open', 'in_progress', 'resolved', 'closed');

-- 2. TABLES

-- PROFILES (extends Supabase auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  full_name text,
  avatar_url text,
  role user_role default 'fan' not null,
  membership_tier membership_tier default 'free' not null,
  stripe_customer_id text unique,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- MEMBERSHIP PLANS
create table public.membership_plans (
  id uuid primary key default uuid_generate_v4(),
  tier membership_tier unique not null,
  name text not null,
  description text,
  monthly_price_usd integer not null, -- stored in cents
  annual_price_usd integer not null,  -- stored in cents
  stripe_product_id text unique not null,
  is_active boolean default true,
  created_at timestamptz default now() not null
);

-- STRIPE SUBSCRIPTIONS
create table public.stripe_subscriptions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  stripe_subscription_id text unique not null,
  plan_id uuid references public.membership_plans(id) not null,
  status subscription_status not null,
  current_period_start timestamptz not null,
  current_period_end timestamptz not null,
  cancel_at_period_end boolean default false,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- EVENTS
create table public.events (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  event_date timestamptz not null,
  location text not null,
  venue text,
  image_url text,
  capacity integer,
  is_virtual boolean default false,
  requires_vip boolean default false,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- EVENT REGISTRATIONS
create table public.event_registrations (
  id uuid primary key default uuid_generate_v4(),
  event_id uuid references public.events(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  registered_at timestamptz default now() not null,
  unique(event_id, user_id)
);

-- EXCLUSIVE CONTENT
create table public.exclusive_content (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  content_type text not null, -- 'video', 'audio', 'gallery', 'article'
  media_url text not null,
  thumbnail_url text,
  required_tier membership_tier default 'gold' not null,
  published_at timestamptz default now(),
  expires_at timestamptz,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- COMMUNITY POSTS
create table public.community_posts (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  title text,
  content text not null,
  media_url text,
  is_pinned boolean default false,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- SUPPORT TICKETS
create table public.support_tickets (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  category text not null,
  subject text not null,
  status ticket_status default 'open' not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- TICKET MESSAGES
create table public.ticket_messages (
  id uuid primary key default uuid_generate_v4(),
  ticket_id uuid references public.support_tickets(id) on delete cascade not null,
  sender_id uuid references public.profiles(id) on delete cascade not null,
  message text not null,
  created_at timestamptz default now() not null
);

-- 3. ROW LEVEL SECURITY (RLS) POLICIES

alter table public.profiles enable row level security;
alter table public.stripe_subscriptions enable row level security;
alter table public.events enable row level security;
alter table public.event_registrations enable row level security;
alter table public.exclusive_content enable row level security;
alter table public.community_posts enable row level security;
alter table public.support_tickets enable row level security;

-- Profiles: Users can read everyone (for community), but only update themselves
create policy "Public Profiles are viewable by everyone" on public.profiles for select using (true);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

-- Events: Viewable by all, insert/update by admins only
create policy "Events viewable by everyone" on public.events for select using (true);

-- Event Registrations: Users can only see and manage their own
create policy "Users can view own registrations" on public.event_registrations for select using (auth.uid() = user_id);
create policy "Users can insert own registrations" on public.event_registrations for insert with check (auth.uid() = user_id);

-- Support Tickets: Users can view/insert own. Admins can view/update all.
create policy "Users can view own tickets" on public.support_tickets for select using (auth.uid() = user_id);
create policy "Users can create tickets" on public.support_tickets for insert with check (auth.uid() = user_id);

-- 4. TRIGGERS

-- Set updated_at on profile change
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.handle_updated_at();

-- Automatically create profile on auth.signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
