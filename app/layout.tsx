import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Software Developer & Data Scientist",
  description:
    "Professional portfolio showcasing software development, data science projects, and technical skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* SİBER GÜVENLİK KALKANLARI (CYBERSECURITY HEADERS) */}
        {/* 1. Content-Security-Policy (CSP): Dışarıdan izinsiz script veya veri yüklenmesini engeller (XSS Koruması) */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https:;" />
        
        {/* 2. Referrer-Policy: Başka sitelere giderken nereden gelindiği bilgisini gizler (Gizlilik) */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* 3. X-Content-Type-Options: Tarayıcının dosyaları yanlış yorumlayıp zararlı kod çalıştırmasını engeller (MIME Sniffing Koruması) */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
