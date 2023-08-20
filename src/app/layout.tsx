import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin-ext"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Tips",
  description: "Tips for you guys",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
