import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
/* import NatBar */
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio AdriMartinezB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* NatBar */}
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
