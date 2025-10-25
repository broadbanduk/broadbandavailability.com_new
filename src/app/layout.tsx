import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactDialog from "@/components/Dialog/ContactDialog";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
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
      <body className={`${openSans.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ContactDialog />
      </body>
    </html>
  );
}
