import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Commandrot — Talk to your Mac, approve actions",
  description: "Voice + text agent to control your Mac with previews and approvals.",
  metadataBase: new URL("https://commandrot.com"),
  openGraph: {
    title: "Commandrot",
    description: "Talk to your Mac. Approve actions. Get it done.",
    url: "https://commandrot.com",
    siteName: "Commandrot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commandrot",
    description: "Talk to your Mac. Approve actions. Get it done.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
