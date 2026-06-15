-- ========================================================================================
-- THOMAS RHETT SUPERFAN HUB - SUPABASE SEED DATA
-- ========================================================================================

-- Insert Events (2026 Tour Data)
INSERT INTO public.events (title, event_date, location, venue) VALUES
('Headline Show with Niall Horan', '2026-07-09 19:00:00+00', 'Nashville TN', 'Geodis Park'),
('The Soundtrack to Life Tour', '2026-07-11 19:30:00+00', 'Greenville SC', 'Bon Secours Wellness Arena'),
('The Soundtrack to Life Tour', '2026-07-16 20:00:00+00', 'Hartford CT', 'The Meadows Music Theatre'),
('The Soundtrack to Life Tour', '2026-07-17 19:00:00+00', 'Gilford NH', 'BankNH Pavilion'),
('Headline Show with Niall Horan', '2026-07-18 19:00:00+00', 'Hershey PA', 'Hersheypark Stadium'),
('Morgan Wallen Still The Problem Tour', '2026-07-24 19:00:00+00', 'Ann Arbor MI', 'Michigan Stadium'),
('Luke Combs Tour (Night 1)', '2026-07-31 20:00:00+00', 'London UK', 'Wembley Stadium'),
('Luke Combs Tour (Night 2)', '2026-08-01 20:00:00+00', 'London UK', 'Wembley Stadium'),
('Luke Combs Tour (Night 3)', '2026-08-02 20:00:00+00', 'London UK', 'Wembley Stadium'),
('WE Fest', '2026-08-07 18:00:00+00', 'Detroit Lakes MN', 'Soo Pass Ranch'),
('Thomas Rhett Tour', '2026-08-13 19:30:00+00', 'Columbia MD', 'Merriweather Post Pavilion'),
('Thomas Rhett Tour', '2026-08-14 19:30:00+00', 'Bethel NY', 'Bethel Woods Center for the Arts'),
('Lasso Festival', '2026-08-15 19:00:00+00', 'Montreal QC', 'Parc Jean-Drapeau'),
('Thomas Rhett Tour', '2026-08-20 19:30:00+00', 'Evansville IN', 'Ford Center'),
('LIV Golf After Play', '2026-08-21 20:00:00+00', 'Indianapolis IN', 'Indianapolis IN'),
('Thomas Rhett Tour', '2026-08-22 19:30:00+00', 'Grand Rapids MI', 'Acrisure Amphitheater'),
('Thomas Rhett Tour', '2026-09-10 19:30:00+00', 'Louisville KY', 'KFC Yum! Center'),
('Thomas Rhett Tour', '2026-09-11 19:30:00+00', 'Columbus OH', 'Schottenstein Center'),
('Thomas Rhett Tour', '2026-09-12 19:30:00+00', 'Cuyahoga Falls OH', 'Blossom Music Center'),
('Thomas Rhett Tour', '2026-09-17 19:30:00+00', 'Austin TX', 'Moody Center'),
('Thomas Rhett Tour', '2026-09-18 19:30:00+00', 'Dallas TX', 'American Airlines Center'),
('Thomas Rhett Tour', '2026-09-19 19:30:00+00', 'Tulsa OK', 'BOK Center'),
('Thomas Rhett Tour', '2026-10-02 19:30:00+00', 'Anaheim CA', 'Honda Center'),
('Thomas Rhett Tour', '2026-10-03 19:30:00+00', 'Sacramento CA', 'Golden 1 Center');

-- Insert Membership Plans
INSERT INTO public.membership_plans (tier, name, description, monthly_price_usd, annual_price_usd, stripe_product_id) VALUES
('silver', 'Silver Membership', 'Access to exclusive community features, private events, and basic behind the scenes.', 499, 4990, 'prod_silver_mock_tr'),
('gold', 'Gold Membership', 'Early access tickets, enhanced vault content, and digital meet and greets.', 999, 9990, 'prod_gold_mock_tr'),
('vip', 'VIP Membership', 'Premium access. Includes everything from Gold plus VIP ticket options and merchandise discounts.', 2499, 24990, 'prod_vip_mock_tr');
