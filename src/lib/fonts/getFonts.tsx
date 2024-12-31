import localFont from "next/font/local";
import { Roboto_Flex, DM_Sans } from 'next/font/google'

export const geistSans = localFont({
  src: "../../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "../../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
})

export const dmSans = DM_Sans({
  subsets: ["latin"],
})