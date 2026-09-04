import { Cormorant_Garamond, Plus_Jakarta_Sans, Great_Vibes, Alex_Brush  } from 'next/font/google';
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-jakarta',
});
const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-juliana',
});

const alexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-juliana-slogan',
});
export const metadata = { 
  title: "JULIANA - NAIL ART ESTUDIO",
  description: "Estética Profesional, Manicure & Nail Art",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} ${greatVibes.variable} ${alexBrush.variable}`}>
      <body>{children}</body>
    </html>
  );
}