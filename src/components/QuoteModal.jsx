import React from 'react';
import { X } from 'lucide-react';
import QuoteSection from './QuoteSection';

export default function QuoteModal({ isOpen, onClose, selectedProduct = '' }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="relative w-full max-w-4xl bg-[#F4EFE3] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#B38A2A] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-[#4A4226] text-[#D1A83A] hover:bg-[#564D2D] p-2 rounded-full border border-[#B38A2A] shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Inner Container */}
        <div className="p-2 sm:p-4">
          <QuoteSection initialProduct={selectedProduct} />
        </div>
      </div>
    </div>
  );
}
