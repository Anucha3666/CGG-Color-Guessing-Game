import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "CGG | Color Guessing Game",
//   description:
//     "Color Guessing Game: A simple yet engaging game designed to test your ability to distinguish colors accurately. Players must select the correct color that matches the question within a set time limit. This game enhances memory and observation skills while offering endless fun for everyone. | Powered by 36Service [Mahingsa] |",
// };

export const metadata: Metadata = {
  title: "Color Guessing Game | Test Your Color Skills | CGG",
  description:
    "Play the Color Guessing Game (CGG) - a fun and challenging game to test your color recognition skills! Match colors accurately within a set time limit and enhance your memory and observation. Perfect for all ages. Enjoy endless fun and improve your skills with CGG! | Powered by 36Service [Mahingsa] |",
  keywords: [
    "Color Guessing Game",
    "Color game",
    "Memory game",
    "Observation game",
    "Color recognition",
    "Fun games for kids",
    "Color matching challenge",
    "36Service",
    "Mahingsa",
    "Test color skills",
  ],
  authors: [
    {
      name: "Mahingsa",
    },
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    title: "Color Guessing Game | Test Your Color Skills | CGG",
    description:
      "Join the exciting Color Guessing Game to test your color-matching abilities! Challenge yourself and enhance your skills. Powered by 36Service [Mahingsa].",
    url: "https://github.com/Anucha3666",
    images: [
      {
        url: "https://yourwebsite.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Color Guessing Game - Test Your Color Skills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Color Guessing Game | Test Your Color Skills | CGG",
    description:
      "Play the Color Guessing Game! Test your color recognition and memory in this fun and engaging game for all ages. Powered by 36Service [Mahingsa].",
    images: [
      {
        url: "https://yourwebsite.com/images/twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Color Guessing Game - Test Your Color Skills",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='robots' content='index, follow' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
