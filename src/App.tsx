import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { HomePage } from './pages/home/HomePage';
import { PricingPage } from './pages/pricing/PricingPage';
import { PaymentPage } from './pages/payment/PaymentPage';
import { BlogPage } from './pages/blog/BlogPage';
import { BlogPostPage } from './pages/blog/BlogPostPage';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { TermsConditions } from './pages/legal/TermsConditions';
import { Disclaimer } from './pages/legal/Disclaimer';
import { AboutUs } from './pages/about/AboutUs';

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}