import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KasKompas – Financieel dashboard voor zzp'ers",
  description: "Inzicht in cashflow, BTW-reservering, belasting en meer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
