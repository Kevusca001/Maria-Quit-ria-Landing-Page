'use client';

import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';

type Show = {
  location: string;
  date: string;
  time: string;
  status: string;
};

export default function EventInfo() {
  const shows: Show[] = [
    {
  location: 'Sessão Imersiva - Juiz de Fora',
  date: '05/09/2026',
  time: '20:00',
  status: 'Disponível',
},
{
  location: 'Teatro Miguel Falabella - Norte Shopping',
  date: '11/09/2026',
  time: '21:00',
  status: 'Disponível',
},
{
  location: 'São Paulo - Bela Vista',
  date: '12/09/2026',
  time: '20:00',
  status: 'Disponível',
},
{
  location: 'Curitiba',
  date: '03/10/2026',
  time: '19:00',
  status: 'Disponível',
},
{
  location: 'Niterói',
  date: '17/10/2026',
  time: '20:00',
  status: 'Disponível',
},
{
  location: 'Nova Iguaçu',
  date: '28/11/2026',
  time: '19:30',
  status: 'Disponível',
},
    // Datas sem mês definido ficam em uma aba separada
    {
      location: 'CONFIRMADOS: Niterói e Nova Iguaçu',
      date: 'A Confirmar',
      time: 'A Confirmar',
      status: 'Disponível em breve',
    },
  ];

  function getMonthKey(date: string) {
    const [day, month, year] = date.split('/');

    if (!day || !month || !year) {
      return 'a-confirmar';
    }

    return `${year}-${month}`;
  }

  function getMonthLabel(date: string) {
    const [day, month, year] = date.split('/');

    if (!day || !month || !year) {
      return 'A confirmar';
    }

    const monthDate = new Date(Number(year), Number(month) - 1);

    return monthDate.toLocaleDateString('pt-BR', {
      month: 'long',
      year: 'numeric',
    });
  }

  const monthGroups = useMemo(() => {
    const grouped = shows.reduce((acc, show) => {
      const key = getMonthKey(show.date);

      if (!acc[key]) {
        acc[key] = {
          key,
          label: getMonthLabel(show.date),
          shows: [],
        };
      }

      acc[key].shows.push(show);
      return acc;
    }, {} as Record<string, { key: string; label: string; shows: Show[] }>);

    return Object.values(grouped).sort((a, b) => {
      if (a.key === 'a-confirmar') return 1;
      if (b.key === 'a-confirmar') return -1;

      return a.key.localeCompare(b.key);
    });
  }, []);

  const [activeMonth, setActiveMonth] = useState(monthGroups[0]?.key);

  const selectedMonth = monthGroups.find((month) => month.key === activeMonth);

  return (
    <section className="py-12 md:py-32 bg-deep-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.1)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            Agenda do Espetáculo
          </h2>

          <p className="text-gray-400 font-sans text-base md:text-lg max-w-2xl mx-auto">
            Selecione o mês desejado e confira as apresentações disponíveis.
          </p>
        </motion.div>

        {/* Seleção dos meses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-8"
        >
          <div className="flex gap-3 overflow-x-auto pb-3 md:pb-0 md:flex-wrap md:justify-center scrollbar-thin scrollbar-thumb-bordeaux scrollbar-track-transparent">
            {monthGroups.map((month) => {
              const isActive = activeMonth === month.key;

              return (
                <button
                  key={month.key}
                  type="button"
                  onClick={() => setActiveMonth(month.key)}
                  className={`
                    shrink-0 rounded-sm border px-5 py-3 text-left transition-all duration-300
                    ${
                      isActive
                        ? 'bg-bordeaux/50 border-burnt-red text-white'
                        : 'bg-smoke/40 border-bordeaux/40 text-gray-400 hover:bg-bordeaux/20 hover:text-white'
                    }
                  `}
                >
                  <span className="block font-serif text-lg capitalize leading-none">
                    {month.label}
                  </span>

                  <span className="mt-2 block font-sans text-xs uppercase tracking-wider text-gray-400">
                    {month.shows.length}{' '}
                    {month.shows.length === 1 ? 'apresentação' : 'apresentações'}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Lista do mês selecionado */}
        <motion.div
          key={activeMonth}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-smoke/50 rounded-sm border border-bordeaux/50 overflow-hidden"
        >
          <div className="p-5 md:p-6 bg-bordeaux/20 border-b border-bordeaux/50">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-burnt-red font-sans uppercase tracking-widest text-xs">
                  Mês selecionado
                </span>

                <h3 className="text-white font-serif text-2xl md:text-3xl capitalize mt-1">
                  {selectedMonth?.label}
                </h3>
              </div>

              <p className="text-gray-400 font-sans text-sm">
                {selectedMonth?.shows.length}{' '}
                {selectedMonth?.shows.length === 1
                  ? 'data encontrada'
                  : 'datas encontradas'}
              </p>
            </div>
          </div>

          {/* Cabeçalho da tabela no desktop */}
          <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-bordeaux/10 border-b border-bordeaux/40 text-gray-400 font-sans uppercase tracking-widest text-sm">
            <div className="col-span-5 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-burnt-red" />
              Local
            </div>

            <div className="col-span-3 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-burnt-red" />
              Data
            </div>

            <div className="col-span-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-burnt-red" />
              Horário
            </div>

            <div className="col-span-2 flex items-center justify-end text-right">
              Status
            </div>
          </div>

          <div className="divide-y divide-bordeaux/30">
            {selectedMonth?.shows.map((show, index) => (
              <div
                key={`${show.location}-${show.date}-${index}`}
                className="p-5 md:p-6 hover:bg-bordeaux/10 transition-colors duration-300"
              >
                {/* Layout desktop */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
                  <div className="col-span-5">
                    <span className="text-gray-300 font-sans leading-relaxed">
                      {show.location}
                    </span>
                  </div>

                  <div className="col-span-3">
                    <span className="text-white font-serif text-lg">
                      {show.date}
                    </span>
                  </div>

                  <div className="col-span-2">
                    <span className="text-gray-300 font-sans">
                      {show.time}
                    </span>
                  </div>

                  <div className="col-span-2 flex justify-end">
                    <span className="inline-block px-3 py-1 bg-bordeaux/40 border border-burnt-red/30 text-burnt-red text-xs uppercase tracking-wider rounded-sm font-sans">
                      {show.status}
                    </span>
                  </div>
                </div>

                {/* Layout mobile */}
                <div className="md:hidden space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-burnt-red mt-1 flex-shrink-0" />

                    <div>
                      <span className="block text-xs text-gray-500 uppercase tracking-wider">
                        Local
                      </span>

                      <span className="text-gray-300 font-sans leading-relaxed">
                        {show.location}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-burnt-red mt-1 flex-shrink-0" />

                      <div>
                        <span className="block text-xs text-gray-500 uppercase tracking-wider">
                          Data
                        </span>

                        <span className="text-white font-serif text-lg">
                          {show.date}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-burnt-red mt-1 flex-shrink-0" />

                      <div>
                        <span className="block text-xs text-gray-500 uppercase tracking-wider">
                          Horário
                        </span>

                        <span className="text-gray-300 font-sans">
                          {show.time}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="inline-block px-3 py-1 bg-bordeaux/40 border border-burnt-red/30 text-burnt-red text-xs uppercase tracking-wider rounded-sm font-sans">
                      {show.status}
                    </span>
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
