import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import WhatsAppButton from './components/WhatsAppButton';
import MobileStickyBar from './components/MobileStickyBar';
import LeafCursor from './components/LeafCursor';
import QuickInquiryTab from './components/QuickInquiryTab';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PelletsPage from './pages/PelletsPage';
import BriquettesPage from './pages/BriquettesPage';
import IndustriesPage from './pages/IndustriesPage';
import SupplyProcessPage from './pages/SupplyProcessPage';
import ContactPage from './pages/ContactPage';

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

      {/* Main Page Routing */}
      <div className="flex-1">
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
