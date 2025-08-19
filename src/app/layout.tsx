import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marco Boucas - Data Scientist & AI Engineer",
  description: "Portfolio of Marco Boucas, Data Scientist student at CentraleSupélec specializing in AI, NLP, and machine learning. Explore projects, certifications, and professional experience.",
  keywords: "Marco Boucas, Data Scientist, AI, Machine Learning, NLP, CentraleSupélec, Portfolio",
  authors: [{ name: "Marco Boucas" }],
  creator: "Marco Boucas",
  publisher: "Marco Boucas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marcoboucas.github.io",
    title: "Marco Boucas - Data Scientist & AI Engineer",
    description: "Portfolio of Marco Boucas, Data Scientist student at CentraleSupélec specializing in AI, NLP, and machine learning.",
    siteName: "Marco Boucas Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Boucas - Data Scientist & AI Engineer",
    description: "Portfolio of Marco Boucas, Data Scientist student at CentraleSupélec specializing in AI, NLP, and machine learning.",
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
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
