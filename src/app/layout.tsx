import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glenn | Portofolio",
  description: "Glenn Hakim Portofolio Website",
  verification: {
    google: "8I1TcDNROiC4aYfP69UkhkOz7Drgu54uu1PcAktxRuI"
  },
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased bg-primary overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
