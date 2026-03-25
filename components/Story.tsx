'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Story() {
  return (
    <section className="py-12 md:py-32 bg-deep-black relative overflow-hidden border-t border-wine/20">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src=""
          alt="Textura de fundo misteriosa"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-deep-black/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="text-aged-gold uppercase tracking-[0.2em] text-sm font-sans font-semibold mb-4">
            A História
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            O peso de um destino.
          </h3>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 font-sans font-light leading-relaxed">
            <p>
              Ela carregava marcas profundas antes mesmo de entender o que era a dor. Maria Quitéria não é apenas um nome; é a encarnação final de uma força ancestral, uma Pombagira que atravessou o tempo para contar a sua verdade.
            </p>
            <p>
              Em um enredo onde o sagrado e o profano se encontram, segredos há muito enterrados vêm à tona. É uma história sobre as cicatrizes que o mundo deixa nas mulheres e o fogo necessário para curá-las.
            </p>
            <p className="text-wine font-medium italic">
              Prepare-se para revelações que vão desafiar o que você acredita saber sobre força e redenção.
            </p>
          </div>

          <ul className="mt-12 space-y-4">
            {[
              "Uma mulher marcada pela dor.",
              "Um destino cercado de mistério.",
              "Revelações que atravessam vidas.",
              "A força feminina que ressurge do fogo."
            ].map((bullet, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                className="flex items-center text-gray-200 font-sans"
              >
                <div className="w-2 h-2 rounded-full bg-wine mr-4" />
                {bullet}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:w-1/2 relative"
        >
          <div className="aspect-[3/4] relative rounded-sm overflow-hidden shadow-[0_0_50px_rgba(74,4,4,0.3)] border border-wine/30">
            <Image
              src="Aprendi Cedo.png"
              alt="Cena dramática de Maria Quitéria"
              fill
              className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
