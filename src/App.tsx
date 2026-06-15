/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './lib/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import CommunityPage from './pages/CommunityPage';
import EventsPage from './pages/EventsPage';
import ExclusivePage from './pages/ExclusivePage';
import SupportPage from './pages/SupportPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import MembershipPage from './pages/MembershipPage';
import CheckoutPage from './pages/CheckoutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import SafetyPage from './pages/SafetyPage';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="membership" element={<MembershipPage />} />
            <Route path="support" element={<SupportPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="safety" element={<SafetyPage />} />
            
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="community" element={<CommunityPage />} />
              <Route path="exclusive" element={<ExclusivePage />} />
              <Route path="checkout/:tier" element={<CheckoutPage />} />
              <Route path="admin" element={<AdminPage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

