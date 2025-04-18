'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import whatsappImg from '@/public/whatsapp.png'; // adjust path as per your folder
import closeIcon from '@/public/close.svg'; // optional: or just use × directly

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/6262441313"
        target="_blank"
        rel="noopener noreferrer"
        id="whatsapp-button"
        className="fixed bottom-8 right-8 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition duration-300 z-20"
      >
        <Image src={whatsappImg} alt="WhatsApp" width={64} height={64} />
      </a>

      {/* Close Button */}
      <button
        id="close-button"
        onClick={(e) => {
          e.stopPropagation();
          setVisible(false);
        }}
        className="fixed bottom-24 right-24 text-white bg-green-600 rounded-full p-1 text-lg font-bold hover:bg-green-700 focus:outline-none z-20"
      >
        &times;
      </button>
    </>
  );
};

export default WhatsAppButton;
