'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function SocialProof() {
  const reviews = [
    {
      text: "Um espetáculo que atravessa o público do começo ao fim. Impossível sair ileso.",
      author: "Crítica Teatral"
    },
    {
      text: "Intenso, misterioso e profundamente humano. A força da atuação é arrebatadora.",
      author: "Espectador"
    },
    {
      text: "Uma experiência que permanece na memória. A direção de arte e a entrega em cena são impecáveis.",
      author: "Portal de Cultura"
    }
  ];

  return (
    // Borda superior e inferior ajustada para o roxo bordeaux
    <section className="py-12 md:py-32 bg-smoke relative border-y border-bordeaux/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
            O que dizem sobre a obra
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              // Borda do card ajustada para bordeaux para sutileza
              className="bg-deep-black p-10 rounded-sm border border-bordeaux/50 relative shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Ícone de aspas alterado para burnt-red para maior destaque */}
              <Quote className="absolute top-6 left-6 w-12 h-12 text-burnt-red/20" />
              <p className="text-xl text-gray-300 font-serif italic mb-8 relative z-10 leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center">
                {/* Círculo do avatar ajustado para bordeaux */}
                <div className="w-10 h-10 rounded-full bg-bordeaux/40 flex items-center justify-center text-white font-bold mr-4">
                  {review.author.charAt(0)}
                </div>
                <span className="text-aged-gold font-sans font-medium uppercase tracking-wider text-sm">
                  {review.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ficha Técnica */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          // Borda superior da ficha técnica em bordeaux
          className="mt-24 text-center border-t border-bordeaux/50 pt-16"
        >
          <h3 className="text-2xl font-serif text-white mb-8">Ficha Técnica</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-400 font-sans text-sm uppercase tracking-widest">
            <div>
              {/* Títulos da ficha técnica em burnt-red para leitura clara */}
              <span className="block text-burnt-red mb-2">Direção</span>
              <span>[Nome da Direção]</span>
            </div>
            <div>
              <span className="block text-burnt-red mb-2">Elenco</span>
              <span>[Nome do Elenco]</span>
            </div>
            <div>
              <span className="block text-burnt-red mb-2">Teatro</span>
              <span>[Nome do Teatro]</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
