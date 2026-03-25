'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Eu não conheço essa história, vou entender?",
      answer: "Sim. A peça foi escrita para tocar dimensões humanas universais. Não é necessário nenhum conhecimento prévio para se emocionar profundamente."
    },
    {
      question: "Não entendo sobre Pombagira ou espiritualidade, é para mim?",
      answer: "Absolutamente. Embora a narrativa tenha raízes espirituais, o cerne da obra é a dor, a força e a superação feminina. É uma história sobre a condição humana."
    },
    {
      question: "Não costumo ir ao teatro, vou me conectar?",
      answer: "Maria Quitéria não é uma peça convencional. É uma experiência imersiva e visceral. Quem busca arte, intensidade e significado vai se envolver desde o primeiro minuto."
    },
    {
      question: "Vou deixar para depois...",
      answer: "Adiar pode significar perder a oportunidade de viver algo marcante. As sessões são limitadas e a energia deste espetáculo é única. Permita-se viver isso agora."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-32 bg-deep-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            Ainda em dúvida se esta experiência é para você?
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-wine/20 rounded-sm bg-smoke/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="text-xl font-serif text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-wine transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 font-sans text-lg leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
