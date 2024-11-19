import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "../lib/fonts/getFonts";

export const metadata: Metadata = {
  title: "Glenn | Portofolio",
  description: "Portofolio Glenn Hakim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
