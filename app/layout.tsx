import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/index"
import { Footer } from "./components/Footer/index";
import ReactQueryProvider from "./providers/react-query";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
 });

export const metadata: Metadata = {
  title: "Oner",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${roboto.variable} ${roboto.variable}`}>
      <body className="wrapper">
        <ReactQueryProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
