import Image from 'next/image';

const equipe = [
  { 
    id: 1,
    nome: "Nome da Pessoa 1", 
    funcao: "Direção Geral", 
    // Para usar sua própria foto, faça o upload para a pasta "public" com o nome "foto-1.jpg" e altere o src abaixo para "/foto-1.jpg"
    foto: "https://picsum.photos/seed/equipe1/200/200" 
  },
  { 
    id: 2,
    nome: "Nome da Pessoa 2", 
    funcao: "Atuação", 
    foto: "https://picsum.photos/seed/equipe2/200/200" 
  },
  { 
    id: 3,
    nome: "Nome da Pessoa 3", 
    funcao: "Produção", 
    foto: "https://picsum.photos/seed/equipe3/200/200" 
  },
  { 
    id: 4,
    nome: "Nome da Pessoa 4", 
    funcao: "Iluminação", 
    foto: "https://picsum.photos/seed/equipe4/200/200" 
  },
  { 
    id: 5,
    nome: "Nome da Pessoa 5", 
    funcao: "Figurino", 
    foto: "https://picsum.photos/seed/equipe5/200/200" 
  },
  { 
    id: 6,
    nome: "Nome da Pessoa 6", 
    funcao: "Trilha Sonora", 
    foto: "https://picsum.photos/seed/equipe6/200/200" 
  },
];

export default function FichaTecnica() {
  return (
    <section className="py-16 bg-deep-black text-white border-t border-wine/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gold mb-4">
            Ficha Técnica
          </h2>
          <div className="w-24 h-1 bg-wine mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {equipe.map((membro) => (
            <div key={membro.id} className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full overflow-hidden border-2 border-wine/30 shadow-lg shadow-wine/5">
                <Image
                  src={membro.foto}
                  alt={`Foto de ${membro.nome}`}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-lg font-serif text-white mb-1">{membro.nome}</h3>
              <p className="text-sm font-sans text-gray-400 uppercase tracking-wider">{membro.funcao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
