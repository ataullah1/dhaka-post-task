import type { Metadata } from "next";
import { Roboto_Condensed, Roboto } from "next/font/google"; 
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"], 
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "The Downtown - News Layout",
  description: "News layout implementation",
};

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.variable} ${roboto.variable} antialiased font-sans text-gray-900 bg-white`}
      >
        <div className="min-h-screen flex flex-col">
           <Header />
           <main className="flex-grow">
            {children}
           </main>
           <Footer />
        </div>
      </body>
    </html>
  );
}
