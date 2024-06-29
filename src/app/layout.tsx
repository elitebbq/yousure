import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";

const inter = Comic_Neue({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "r u sure about that?",
  description: "areyousure?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
