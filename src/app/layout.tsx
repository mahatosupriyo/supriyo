import type { Metadata } from "next";
import "./globals.css";
import '@/styles/global.scss';
import { SmoothScrollProvider } from "@/utils/scrollprovider";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Supriyo Mahato",
  description: "Pixels, People, Products — I design with all three in mind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/aaf7wuq.css"></link>
      </Head>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
