'use client';

import { HiArrowLeft } from 'react-icons/hi';

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center justify-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-20 transition-all duration-200"
    >
      <HiArrowLeft className="w-5 h-5" />
      Go Back
    </button>
  );
}
