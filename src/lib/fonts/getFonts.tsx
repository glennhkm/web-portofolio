import localFont from "next/font/local";
import { Oswald } from 'next/font/google'

export const geistMono = localFont({
  src: "../../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const oswald = Oswald({
  subsets: ["latin"],
})