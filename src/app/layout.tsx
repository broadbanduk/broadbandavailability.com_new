import type { Metadata } from "next";
import { Open_Sans, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactDialog from "@/components/Dialog/ContactDialog";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Broadband Availability",
  description:
    "Broadband Availability - The UK's Most Trusted Source of Broadband Availability Data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${openSans.variable} ${lato.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ContactDialog />
      </body>
    </html>
  );
}
