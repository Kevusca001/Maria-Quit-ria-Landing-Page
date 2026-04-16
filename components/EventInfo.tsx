'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Info } from 'lucide-react';

export default function EventInfo() {
  // Novo formato de dados: um array de apresentações (shows)
  const shows = [
    {
      date: "10/07/2026",
      time: "20:00",
      location: "GEMAG - Rua Dona Cantilda, 46 - Rio de Janeiro",
      status: "Disponível" // Opcional, bom para "Esgotado", etc.
    },
    {
      date: "11/07/2026",
      time: "21:00",
      location: "GEMAG - Rua Dona Cantilda, 46 - Rio de Janeiro",
      details: "Duração: 01:20 | Classificação: +14",
      status: "Disponível"
    },
    // Adicione mais datas aqui
  ];

  return (
    <section className="py-12 md:py-32 bg-deep-black relative">
      {/* Fundo ajustado para a cor roxa (burnt-red) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.1)_0%,transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            Agenda do Espetáculo
          </h2>
          <p className="text-gray-400 font-sans text-lg">
            Confira as datas e locais da nossa temporada.
          </p>
        </motion.div>

        {/* Tabela/Lista Vertical Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-smoke/50 rounded-sm border border-bordeaux/50 overflow-hidden"
        >
          {/* Cabeçalho da Tabela (Oculto em telas muito pequenas para melhor mobile) */}
          <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-bordeaux/20 border-b border-bordeaux/50 text-gray-400 font-sans uppercase tracking-widest text-sm">
            <div className="col-span-2 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-burnt-red" /> Data
            </div>
            <div className="col-span-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-burnt-red" /> Horário
            </div>
            <div className="col-span-5 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-burnt-red" /> Local
            </div>
            <div className="col-span-3 flex items-center gap-2">
              <Info className="w-4 h-4 text-burnt-red" /> Detalhes
            </div>
          </div>

          {/* Linhas de Apresentações */}
          <div className="divide-y divide-bordeaux/30">
            {shows.map((show, index) => (
              <div 
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 hover:bg-bordeaux/10 transition-colors duration-300"
              >
                {/* Visualização Mobile: Rótulos aparecem junto com a informação */}
                {/* Visualização Desktop: Segue o grid do cabeçalho */}
                <div className="col-span-12 md:col-span-2 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-burnt-red md:hidden" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase md:hidden">Data</span>
                    <span className="text-white font-serif text-lg">{show.date}</span>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-2 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-burnt-red md:hidden" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase md:hidden">Horário</span>
                    <span className="text-gray-300 font-sans">{show.time}</span>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-5 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-burnt-red mt-1 md:hidden" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase md:hidden">Local</span>
                    <span className="text-gray-300 font-sans leading-relaxed">{show.location}</span>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-3 flex items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-burnt-red mt-1 md:hidden" />
                    <div>
                      <span className="block text-xs text-gray-500 uppercase md:hidden">Detalhes</span>
                      <span className="text-gray-400 font-sans text-sm">{show.details}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
