import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glenn | Portofolio",
  description: "Glenn Hakim Portofolio Website",
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
