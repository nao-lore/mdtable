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
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title: "Markdown Table Generator - Create Tables Instantly | mdtable",
  description:
    "Free online Markdown table generator. Create, edit, and export Markdown tables with a spreadsheet-like editor. Supports CSV import, column alignment, and instant copy.",
  keywords: [
    "markdown table generator",
    "markdown table editor online",
    "create markdown table",
    "markdown table creator",
    "markdown table tool",
    "csv to markdown",
  ],
  authors: [{ name: "mdtable" }],
  openGraph: {
    title: "Markdown Table Generator - Create Tables Instantly",
    description:
      "Free online tool to create Markdown tables with a visual editor. Supports CSV import and column alignment.",
    url: "https://mdtable.vercel.app",
    siteName: "mdtable",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Markdown Table Generator - Create Tables Instantly",
    description:
      "Free online tool to create Markdown tables with a visual editor. Supports CSV import and column alignment.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mdtable.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Markdown Table Generator",
              description:
                "Free online Markdown table generator with a spreadsheet-like editor. Create, edit, and export Markdown tables instantly.",
              url: "https://mdtable.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Spreadsheet-like table editor",
                "Real-time Markdown preview",
                "CSV import",
                "Column alignment (left, center, right)",
                "One-click copy to clipboard",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
