'use client';

import { motion } from 'motion/react';

export default function Connection() {
  return (
    <section className="py-12 md:py-40 bg-deep-black relative flex flex-col items-center justify-center text-center px-4">
      {/* O brilho de fundo (radial-gradient) estava com o RGBA do vermelho antigo. 
          Foi alterado para o RGBA do burnt-red (roxo vibrante) para manter a coerência visual. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15)_0%,transparent_70%)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-12 leading-snug">
          Você já precisou se reconstruir das próprias cinzas?
        </h2>
        
        <div className="space-y-6 text-lg md:text-2xl text-gray-400 font-sans font-light leading-relaxed">
          <p>
            Esta não é apenas a história de uma entidade. É o espelho de todas as mulheres que já foram silenciadas, julgadas ou feridas.
          </p>
          <p>
            Se você já passou por dores profundas e recomeços inesperados... Se você busca força onde parece não haver mais nada... Se você se fascina pelos mistérios do feminino e pela capacidade de renascer...
          </p>
          <p className="text-aged-gold font-medium italic mt-8 text-2xl md:text-3xl">
            Maria Quitéria é sobre você.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
