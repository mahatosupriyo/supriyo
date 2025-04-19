import type { Metadata } from "next";
import "./globals.css";
import '@/styles/global.scss';
import { SmoothScrollProvider } from "@/utils/scrollprovider";

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
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
