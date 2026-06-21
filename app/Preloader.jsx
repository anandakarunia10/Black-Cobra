"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Kunci scroll saat loading
    document.body.style.overflow = "hidden";

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Buka kunci scroll setelah animasi selesai
          document.body.style.overflow = "auto";
          setIsLoading(false);
        }
      });

      // 1. Logo muncul perlahan (Fade In & Scale Up)
      tl.fromTo(logoRef.current, 
        { opacity: 0, scale: 0.8, filter: "blur(10px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }
      )
      // 2. Teks EST 2026 muncul menyusul
      .fromTo(textRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5" // Mulai setengah detik lebih awal sebelum logo selesai muncul
      )
      // 3. Jeda sejenak untuk membiarkan user melihat logo (0.8 detik)
      .to({}, { duration: 0.8 })
      // 4. Layar hitam terangkat ke atas membuka website
      .to(containerRef.current, 
        { yPercent: -100, duration: 1.2, ease: "power4.inOut" }
      );

    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "auto"; // Pastikan scroll kembali normal jika komponen tiba-tiba dibongkar
    };
  }, []);

  if (!isLoading) return null; // Jika loading selesai, hancurkan komponen ini dari layar

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#0f0d0c] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Glow effect di belakang logo */}
      <div className="absolute inset-0 bg-gradient-radial from-[#d1110b]/20 via-transparent to-transparent opacity-50"></div>
      
      {/* Gambar Logo */}
      <img 
        ref={logoRef}
        src="/icon.png" 
        alt="Black Cobra Preloader" 
        className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_10px_20px_rgba(209,17,11,0.3)] relative z-10"
      />
      
      {/* Teks Pendukung */}
      <div ref={textRef} className="mt-8 relative z-10 flex flex-col items-center">
        <h2 className="text-[#e9e6dd] text-2xl md:text-3xl font-black tracking-[0.3em] uppercase">Black Cobra</h2>
        <p className="text-[#d1110b] font-semibold text-sm tracking-widest mt-2 uppercase">Est. 2026</p>
      </div>
    </div>
  );
}