import type { Metadata } from "next";
import { Inter, Fira_Sans_Extra_Condensed } from "next/font/google";
import "./globals.css";
import Hero from "../components/Hero";

const inter = Inter({ subsets: ["latin"] });
const fira = Fira_Sans_Extra_Condensed({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Anime World",
  description: "A Next JS project built with framer motion and infinite scroll.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fira.className}>
        <Hero />
        {children}
      </body>
    </html>
  );
}
