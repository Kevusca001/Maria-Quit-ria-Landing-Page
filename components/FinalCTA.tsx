'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

interface FinalCTAProps {
  symplaLink: string;
}

export default function FinalCTA({ symplaLink }: FinalCTAProps) {
  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden bg-deep-black border-t border-wine/30">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/dramatic-red-smoke/1920/1080?blur=6"
          alt="Fundo final dramático"
          fill
          className="object-cover opacity-30 mix-blend-screen"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/80 to-deep-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,0,0,0.2)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 font-serif leading-tight drop-shadow-2xl"
        >
          Chegou o momento de viver essa experiência.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-3xl text-gray-300 max-w-2xl mx-auto mb-16 font-sans font-light leading-relaxed"
        >
          As sessões são limitadas. Não adie o encontro com uma história que vai marcar a sua vida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <a
            href={symplaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-5 md:px-16 md:py-6 text-xl md:text-2xl font-bold text-white uppercase tracking-wider bg-wine hover:bg-burnt-red transition-all duration-300 rounded-sm overflow-hidden shadow-[0_0_50px_rgba(139,0,0,0.6)] hover:shadow-[0_0_80px_rgba(139,0,0,0.8)]"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            Garantir meu ingresso no Sympla
          </a>
          <p className="mt-6 text-sm md:text-base text-gray-400 font-sans uppercase tracking-widest flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
            Você será redirecionado para o Sympla para concluir sua compra com segurança.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
