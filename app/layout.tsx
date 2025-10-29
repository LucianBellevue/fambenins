import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Family Benefits Center - Health & Life Insurance Solutions",
  description: "Professional health and life insurance services including ICHRA solutions for small businesses. Trusted insurance partner protecting families and businesses.",
  keywords: [
    "health insurance",
    "life insurance",
    "ICHRA",
    "small business insurance",
    "family benefits",
    "insurance solutions",
    "employee benefits",
    "health coverage",
    "insurance broker",
    "affordable insurance"
  ],
  authors: [{ name: "Family Benefits Center" }],
  creator: "Family Benefits Center",
  publisher: "Family Benefits Center",
  metadataBase: new URL('https://familybenefitscenter.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://familybenefitscenter.com',
    siteName: 'Family Benefits Center',
    title: 'Family Benefits Center - Health & Life Insurance Solutions',
    description: 'Professional health and life insurance services including ICHRA solutions for small businesses. Trusted insurance partner protecting families and businesses.',
    images: [
      {
        url: '/famben_banner.png',
        width: 1200,
        height: 630,
        alt: 'Family Benefits Center - Your Trusted Insurance Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Benefits Center - Health & Life Insurance Solutions',
    description: 'Professional health and life insurance services including ICHRA solutions for small businesses. Trusted insurance partner protecting families and businesses.',
    images: ['/famben_banner.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon.ico' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
