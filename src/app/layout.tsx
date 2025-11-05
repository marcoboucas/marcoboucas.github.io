import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marco Boucas - Data Scientist & Ingénieur IA",
  description: "Portfolio de Marco Boucas, Data Scientist étudiant à CentraleSupélec spécialisé en IA, NLP et apprentissage automatique. Découvrez mes projets, certifications et expérience professionnelle.",
  keywords: "Marco Boucas, Data Scientist, IA, Apprentissage Automatique, NLP, CentraleSupélec, Portfolio",
  authors: [{ name: "Marco Boucas" }],
  creator: "Marco Boucas",
  publisher: "Marco Boucas",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://marcoboucas.github.io",
    title: "Marco Boucas - Data Scientist & Ingénieur IA",
    description: "Portfolio de Marco Boucas, Data Scientist étudiant à CentraleSupélec spécialisé en IA, NLP et apprentissage automatique.",
    siteName: "Marco Boucas Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Boucas - Data Scientist & Ingénieur IA",
    description: "Portfolio de Marco Boucas, Data Scientist étudiant à CentraleSupélec spécialisé en IA, NLP et apprentissage automatique.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
