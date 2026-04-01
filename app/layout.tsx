import type {Metadata} from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import Script from 'next/script'; // <-- 1. Importação do Script adicionada aqui
import './globals.css'; // Global styles

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Maria Quitéria | O Espetáculo',
  description: 'Uma experiência teatral intensa sobre dor, mistério e a força feminina que ressurge do fogo. Garanta seu ingresso.',
  keywords: ['espetáculo Maria Quitéria', 'peça de teatro Maria Quitéria', 'teatro espiritual feminino', 'espetáculo sobre Pombagira', 'peça sobre superação feminina'],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${cormorantGaramond.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-black text-white font-sans antialiased selection:bg-red-900 selection:text-white" suppressHydrationWarning>
        {children}

        {/* 2. Tag do Google Ads adicionada abaixo do children */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18025823341"
        />
        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18025823341');
            `,
          }}
        />
      </body>
    </html>
  );
}
