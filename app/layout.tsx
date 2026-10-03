import type { Metadata } from "next";
import { Inter, Inter_Tight, Work_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Exur | Voice-to-Architecture Canvas for Distributed Systems",
  description:
    "Exur is the world's first voice-to-architecture canvas. Speak your system requirements — Exur renders the live topology graph, drafts RFC specs, and audits cloud costs.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Exur — Voice-to-Architecture Canvas",
    description: "Voice-driven system architecture whiteboarding powered by Google Gemma 4, Backboard.io, and ElevenLabs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${workSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased font-sans bg-[#e4e3e0] text-[#0a1a3a] overflow-x-hidden selection:bg-[#ffcc00] selection:text-[#0d3a80]">
        {children}
      </body>
    </html>
  );
}
