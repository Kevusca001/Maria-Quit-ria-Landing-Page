import Hero from '@/components/Hero';
import NotJustAPlay from '@/components/NotJustAPlay';
import Story from '@/components/Story';
import Connection from '@/components/Connection';
import WhyWatch from '@/components/WhyWatch';
import FAQ from '@/components/FAQ';
import SocialProof from '@/components/SocialProof';
import EventInfo from '@/components/EventInfo';
import FinalCTA from '@/components/FinalCTA';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  const symplaLink = "https://www.sympla.com.br/[link-do-evento]";

  return (
    <main className="min-h-screen bg-deep-black text-white selection:bg-wine selection:text-white">
      <Hero symplaLink={symplaLink} />
      <NotJustAPlay />
      <Story />
      <Connection />
      <WhyWatch />
      <FAQ />
      <SocialProof />
      <EventInfo />
      <FinalCTA symplaLink={symplaLink} />
      <FloatingCTA symplaLink={symplaLink} />
      
      <footer className="py-12 bg-black text-center border-t border-wine/10">
        <p className="text-gray-500 font-sans text-sm uppercase tracking-widest">
          © {new Date().getFullYear()} Maria Quitéria - O Espetáculo. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
