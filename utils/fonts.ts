import {
  Inter,
  Montserrat,
  JetBrains_Mono,
  PT_Sans,
  PT_Sans_Narrow,
  Oswald,
} from "next/font/google";

export const ptSans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pt-sans",
});

export const ptSansNarrow = PT_Sans_Narrow({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pt-sans-narrow",
});

export const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});
