import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marco Boucas — AI Manager",
  description: "Portfolio de Marco Boucas, AI Manager chez Illuin Technology, spécialisé en NLP, apprentissage automatique et leadership de produit IA.",
  keywords: "Marco Boucas, AI Manager, IA, NLP, Apprentissage Automatique, CentraleSupélec, Portfolio",
  authors: [{ name: "Marco Boucas" }],
  creator: "Marco Boucas",
  publisher: "Marco Boucas",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://marcoboucas.github.io",
    title: "Marco Boucas — AI Manager",
    description: "Portfolio de Marco Boucas, AI Manager chez Illuin Technology.",
    siteName: "Marco Boucas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Boucas — AI Manager",
    description: "Portfolio de Marco Boucas, AI Manager chez Illuin Technology.",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
