import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import WhatsAppButton from './components/WhatsAppButton';
import MobileStickyBar from './components/MobileStickyBar';
import LeafCursor from './components/LeafCursor';
import QuickInquiryTab from './components/QuickInquiryTab';

import HomePage from './pages/HomePage';
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PelletsPage = lazy(() => import('./pages/PelletsPage'));
const BriquettesPage = lazy(() => import('./pages/BriquettesPage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const SupplyProcessPage = lazy(() => import('./pages/SupplyProcessPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Scroll to top component on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleOpenQuoteModal = (product = '') => {
    setSelectedProduct(product);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedProduct('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4EFE3] text-[#2C2718] font-sans antialiased">
      <ScrollToTop />
      
      {/* Sticky Header */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Page Routing with Lazy Loaded Route Suspense */}
      <div className="flex-1">
        <Suspense fallback={
          <div className="min-h-[60vh] flex items-center justify-center text-sm font-bold text-[#4A4226]">
            Loading...
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/about" element={<AboutPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/products" element={<PelletsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/products/pellets" element={<PelletsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/products/briquettes" element={<BriquettesPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/industries" element={<IndustriesPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/bulk-supply" element={<SupplyProcessPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/supply-process" element={<SupplyProcessPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>

      {/* Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Global Interactive Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        selectedProduct={selectedProduct}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Fixed Mobile Bottom Action Bar */}
      <MobileStickyBar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Fixed Vertical Quick Inquiry Side Tab */}
      <QuickInquiryTab onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Interactive Eco Leaf Cursor & Touch Pop-up Effect */}
      <LeafCursor />
    </div>
  );
}
