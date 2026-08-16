import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Voedselwijs",
  description: "Een persoonlijke voedingsproduct-uitlegger.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
