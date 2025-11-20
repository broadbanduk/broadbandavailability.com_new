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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_DOMAIN || "https://broadbandavailability.com"
  ),
  title: "Broadband Availability",
  description:
    "Broadband Availability - The UK's Most Trusted Source of Broadband Availability Data",
  keywords: [
    "broadband availability",
    "UK broadband",
    "internet availability",
    "broadband data",
    "estate agents",
    "property broadband",
  ],
  authors: [{ name: "Broadband Availability" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: process.env.NEXT_PUBLIC_DOMAIN || "https://broadbandavailability.com",
    siteName: "Broadband Availability",
    title: "Broadband Availability",
    description:
      "Broadband Availability - The UK's Most Trusted Source of Broadband Availability Data",
    images: [
      {
        url: "/broadband_share.png",
        width: 1200,
        height: 630,
        alt: "Broadband Availability",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Broadband Availability",
    description:
      "Broadband Availability - The UK's Most Trusted Source of Broadband Availability Data",
    images: ["/broadband_share.png"],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_DOMAIN || "https://broadbandavailability.com",
  },
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
