import type { Metadata } from "next";
import { Inter, Poppins, Gowun_Batang as GowunBatang } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

import Header from "./_components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const gowunBatang = GowunBatang({
  subsets: ["latin"],
  variable: "--font-gowunBatang",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Duke Clara Wedding Invitation",
  description: "Duke Clara Wedding Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${poppins.variable} ${gowunBatang.variable} antialiased`}
      >
        <Header />
        {children}
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  );
}
