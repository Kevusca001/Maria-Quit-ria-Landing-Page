'use client';

import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { Ticket } from 'lucide-react';

interface FloatingCTAProps {
  symplaLink: string;
}

export default function FloatingCTA({ symplaLink }: FloatingCTAProps) {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10"
    >
      <div className="relative flex items-center justify-center">
        {/* Efeito de pulso (ping) atrás do botão */}
        <div className="absolute inset-0 bg-wine rounded-full animate-ping opacity-75" style={{ animationDuration: '2s' }} />
        
        <motion.a
          href={symplaLink}
          target="_blank"
          rel="noopener noreferrer"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="relative flex items-center justify-center gap-3 px-6 py-4 md:px-8 md:py-5 bg-wine hover:bg-burnt-red text-white rounded-full shadow-[0_10px_30px_rgba(59,7,100,0.4)] hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-colors duration-300 group"
        >
          <Ticket className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
          <span className="font-sans font-bold uppercase tracking-wider text-sm md:text-base">
            Ingressos
          </span>
        </motion.a>
      </div>
    </motion.div>
  );
}
