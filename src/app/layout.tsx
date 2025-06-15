import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arif Miah | Full Stack Developer",
  description:
    "Portfolio of Arif Miah, a passionate MERN Stack Developer. Explore my work, blog, and skills.",
  keywords: [
    "Arif Miah",
    "Full Stack Developer",
    "MERN Developer",
    "Portfolio",
    "Next.js Developer",
    "React Developer",
    "Frontend",
    "Backend",
    "TypeScript",
    "Web Developer",
  ],
  authors: [
    { name: "Arif Miah", url: "https://arif-miah-portfolio.vercel.app" },
  ],
  creator: "Arif Miah",
  publisher: "Arif Miah",
  metadataBase: new URL("https://arif-miah-portfolio.vercel.app"),
  openGraph: {
    title: "Arif Miah | Full Stack Developer",
    description:
      "Showcasing my skills in React, Node.js, MongoDB, and modern web technologies.",
    url: "https://arif-miah-portfolio.vercel.app",
    siteName: "Arif Miah Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://arif-miah-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arif Miah Portfolio Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arif Miah | Full Stack Developer",
    description: "Explore my web development projects and blogs.",
    site: "@arifmiah01",
    images: ["https://arif-miah-portfolio.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* google search console */}
        <meta
          name="google-site-verification"
          content="yV8StKhMdrEF2p8kA7I3z1ASQd-0BseseN7-Okfm6Ew"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1MRGGWEVFL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1MRGGWEVFL');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
