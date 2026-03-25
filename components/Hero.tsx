'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

interface HeroProps {
  symplaLink: string;
}

export default function Hero({ symplaLink }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-27 md:pb-30 overflow-hidden bg-deep-black">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Maria Quitéria - O Espetáculo"
          fill
          className="object-contain opacity-70 object-center"
          priority
        />
        {/* Gradiente mais suave no topo para não esconder o texto da imagem, e mais escuro embaixo para dar contraste ao botão */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-black/30 to-deep-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,0,0,0.1)_0%,transparent_80%)]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center w-full">
        {/* O título em texto foi removido pois a imagem de fundo já contém o letreiro "Espetáculo MARIA QUITÉRIA" */}
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-sans font-light leading-relaxed drop-shadow-lg"
        >
          
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center mt-[10px]"
        >
          <a
            href={symplaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-5 text-lg md:text-xl font-bold text-white uppercase tracking-wider bg-wine hover:bg-burnt-red transition-all duration-300 rounded-sm overflow-hidden shadow-[0_0_40px_rgba(139,0,0,0.4)] hover:shadow-[0_0_60px_rgba(139,0,0,0.6)]"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            Garantir meu ingresso
          </a>
          <p className="mt-4 text-xs md:text-sm text-gray-500 font-sans uppercase tracking-widest">
            Compra 100% segura
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-white text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Descubra</span>
        <div className="w-[2px] h-8 md:h-10 bg-gradient-to-b from-white to-transparent shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
      </motion.div>
    </section>
  );
}
