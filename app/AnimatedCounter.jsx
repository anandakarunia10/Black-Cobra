"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCounter({ endValue, duration = 2 }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;

    // Membungkus animasi di dalam gsap.context agar tidak bocor
    let ctx = gsap.context(() => {
      const counterObj = { val: 0 };

      gsap.to(counterObj, {
        val: endValue,
        duration: duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", 
          toggleActions: "play none none reverse",
        },
        onUpdate: () => {
          setCount(Math.ceil(counterObj.val));
        }
      });
    }, counterRef); // Batasi hanya pada komponen ini

    // Cleanup hanya mematikan animasi di dalam context ini (bukan semuanya)
    return () => ctx.revert();
  }, [endValue, duration]);

  return <span ref={counterRef}>{count}</span>;
}