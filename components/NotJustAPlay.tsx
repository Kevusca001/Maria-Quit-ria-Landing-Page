'use client';

import { motion } from 'motion/react';
import { Flame, Eye, Sparkles } from 'lucide-react';

export default function NotJustAPlay() {
  const features = [
    {
      icon: <Flame className="w-8 h-8 text-wine" />,
      title: "Uma Travessia Emocional",
      desc: "Não é apenas teatro. É um mergulho em uma história intensa sobre dor, identidade e força."
    },
    {
      icon: <Eye className="w-8 h-8 text-wine" />,
      title: "O Mistério da Existência",
      desc: "Uma narrativa que toca profundamente o feminino, revelando segredos que atravessam vidas."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-wine" />,
      title: "Renascimento",
      desc: "Acompanhe a jornada de uma mulher que, das cinzas, reconstrói seu próprio destino."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-deep-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-wine/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Não é apenas uma peça.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-sans font-light max-w-3xl mx-auto">
            É uma experiência marcante que vai ecoar em você muito depois que as cortinas se fecharem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-wine/10 flex items-center justify-center mb-6 group-hover:bg-wine/20 transition-colors duration-500 border border-wine/20">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-serif">{feature.title}</h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
