'use client';

import { motion } from 'motion/react';
import { HeartPulse, Sparkles, Theater, Flame } from 'lucide-react';

export default function WhyWatch() {
  const reasons = [
    {
      icon: <HeartPulse className="w-6 h-6 text-wine" />,
      title: "Certas histórias não se assistem, se sentem.",
      desc: "Você não será apenas um espectador. A energia pulsante do palco vai atravessar a plateia."
    },
    {
      icon: <Flame className="w-6 h-6 text-wine" />,
      title: "Provoca, emociona e transforma.",
      desc: "Prepare-se para sair do teatro diferente de como entrou. É uma catarse coletiva."
    },
    {
      icon: <Theater className="w-6 h-6 text-wine" />,
      title: "Diferente de um entretenimento comum.",
      desc: "Uma obra de arte visceral que foge dos clichês e entrega profundidade espiritual e humana."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-wine" />,
      title: "Força feminina e resistência.",
      desc: "Uma oportunidade rara de ver a potência da mulher retratada com tanta crueza e beleza."
    }
  ];

  return (
    <section className="py-12 md:py-32 bg-deep-black border-y border-wine/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
            Por que você precisa ver Maria Quitéria?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start bg-smoke p-8 rounded-sm border border-wine/20 hover:border-wine/50 transition-colors duration-300"
            >
              <div className="flex-shrink-0 mr-6 w-12 h-12 rounded-full bg-deep-black flex items-center justify-center border border-wine/30 shadow-[0_0_15px_rgba(74,4,4,0.5)]">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 font-serif">{reason.title}</h3>
                <p className="text-gray-400 font-sans leading-relaxed text-lg">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
