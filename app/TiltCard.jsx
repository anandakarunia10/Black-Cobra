"use client";

import { useRef, useState } from "react";

export default function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    // Mendapatkan dimensi dan posisi kartu di layar
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Menghitung posisi mouse relatif terhadap kartu
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Mengubah kordinat mouse menjadi derajat rotasi (Maksimal kemiringan 10 derajat)
    const rotateY = ((mouseX / width) - 0.5) * 20; 
    const rotateX = ((mouseY / height) - 0.5) * -20; 

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Mengembalikan kartu ke posisi semula dengan mulus
    setRotation({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
      }}
      // will-change-transform membantu GPU merender animasi agar lebih lancar
      className={`will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}