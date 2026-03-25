'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Info } from 'lucide-react';

export default function EventInfo() {
  const infoItems = [
    {
      icon: <Calendar className="w-6 h-6 text-wine" />,
      label: "Data",
      value: "10/07/2026"
    },
    {
      icon: <Clock className="w-6 h-6 text-wine" />,
      label: "Horário",
      value: "20:00"
    },
    {
      icon: <MapPin className="w-6 h-6 text-wine" />,
      label: "Local",
      value: "GEMAG - Rua Dona Cantilda, 46 - Rio de Janeiro"
    },
    {
      icon: <Info className="w-6 h-6 text-wine" />,
      label: "Detalhes",
      value: "Duração: 01:20 | Classificação: +14"
    }
  ];

  return (
    <section className="py-12 md:py-32 bg-deep-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,0,0,0.1)_0%,transparent_70%)]" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            Informações do Espetáculo
          </h2>
          <p className="text-gray-400 font-sans text-lg">
            Prepare-se para uma noite inesquecível.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center p-6 bg-smoke/50 rounded-sm border border-wine/20"
            >
              <div className="flex-shrink-0 mr-6 w-12 h-12 rounded-full bg-deep-black flex items-center justify-center border border-wine/30">
                {item.icon}
              </div>
              <div>
                <span className="block text-sm text-gray-500 font-sans uppercase tracking-widest mb-1">
                  {item.label}
                </span>
                <span className="block text-xl text-white font-serif">
                  {item.value}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
