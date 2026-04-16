'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react'; // Info foi removido

export default function EventInfo() {
  const shows = [
    {
      location: "GEMAG - Rio de Janeiro",
      date: "10/07/2026",
      time: "20:00",
      status: "Disponível em breve"
    },
    {
      location: "GEMAG - Rio de Janeiro",
      date: "11/07/2026",
      time: "20:00",
      status: "Disponível em breve"
    },
    {
      location: "GEMAG - Rio de Janeiro",
      date: "12/07/2026",
      time: "20:00",
      status: "Disponível em breve"
    },
    {
      location: "CONFIRMADOS: São Paulo; Belo Horizonte; Curitiba",
      date: "A Confirmar",
      time: "A Confirmar",
      status: "Disponível em breve" // Encurtei um pouco para ficar melhor na tela
    },
  ];

  return (
    <section className="py-12 md:py-32 bg-deep-black relative">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-smoke/50 rounded-sm border border-bordeaux/50 overflow-hidden"
        >
          {/* Cabeçalho da Tabela - Ordem Alterada */}
          <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-bordeaux/20 border-b border-bordeaux/50 text-gray-400 font-sans uppercase tracking-widest text-sm">
            <div className="col-span-5 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-burnt-red" /> Local
            </div>
            <div className="col-span-3 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-burnt-red" /> Data
            </div>
            <div className="col-span-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-burnt-red" /> Horário
            </div>
            <div className="col-span-2 flex items-center justify-end gap-2 text-right">
              Status {/* Coluna nova para exibir o status */}
            </div>
          </div>

          <div className="divide-y divide-bordeaux/30">
            {shows.map((show, index) => (
              <div 
                key={index}
                // Ajustei o layout para comportar as colunas corretamente no desktop e manter empilhado no mobile
                className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-4 p-6 hover:bg-bordeaux/10 transition-colors duration-300 items-start md:items-center"
              >
                {/* Local (Agora é o primeiro e ocupa mais espaço) */}
                <div className="w-full md:col-span-5 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-burnt-red mt-1 md:hidden flex-shrink-0" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase md:hidden">Local</span>
                    <span className="text-gray-300 font-sans leading-relaxed">{show.location}</span>
                  </div>
                </div>

                {/* Data */}
                <div className="w-full md:col-span-3 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-burnt-red md:hidden flex-shrink-0" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase md:hidden">Data</span>
                    <span className="text-white font-serif text-lg">{show.date}</span>
                  </div>
                </div>

                {/* Horário */}
                <div className="w-full md:col-span-2 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-burnt-red md:hidden flex-shrink-0" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase md:hidden">Horário</span>
                    <span className="text-gray-300 font-sans">{show.time}</span>
                  </div>
                </div>

                {/* Status (Opcional, se existir) */}
                {show.status && (
                  <div className="w-full md:col-span-2 flex justify-start md:justify-end mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 bg-bordeaux/40 border border-burnt-red/30 text-burnt-red text-xs uppercase tracking-wider rounded-sm font-sans">
                      {show.status}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
