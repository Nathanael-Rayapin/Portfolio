import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import { hasLocale, Locale } from "./dictionaries"
import { notFound } from "next/navigation"
import "../globals.css"

interface ILayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }];
}

export default async function RootLayout({
  children,
  params
}: ILayoutProps) {
  const { lang } = await params;

  // Check that the language exists, otherwise 404
  if (!hasLocale(lang)) {
    notFound();
  }

  return (
    <html lang={lang}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
