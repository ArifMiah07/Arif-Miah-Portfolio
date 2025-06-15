import { Metadata } from "next";
import BlogClient from "@/components/blog/BlogClient";

export const metadata: Metadata = {
  title: "Blog | Arif Miah Portfolio",
  description:
    "Explore insightful blog posts by Arif Miah about web development, JavaScript, React, design, and full stack engineering. Stay updated with the latest dev trends and tutorials.",
  keywords: [
    "Arif Miah Blog",
    "Web Development Blog",
    "JavaScript Articles",
    "React Tutorials",
    "MERN Stack Insights",
    "Full Stack Developer Blog",
    "Programming Tips",
  ],
  metadataBase: new URL("https://arif-miah-portfolio.vercel.app"),
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Arif Miah Portfolio",
    description:
      "Explore insightful blog posts by Arif Miah about web development, JavaScript, React, design, and full stack engineering.",
    url: "https://arif-miah-portfolio.vercel.app/blog",
    siteName: "Arif Miah Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://arif-miah-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arif Miah Blog Page Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Arif Miah Portfolio",
    description:
      "Explore insightful blog posts by Arif Miah about web development, JavaScript, React, design, and full stack engineering.",
    site: "@arifmiah01",
    images: ["https://arif-miah-portfolio.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Arif Miah", url: "https://arif-miah-portfolio.vercel.app/blog" }],
  creator: "Arif Miah",
  publisher: "Arif Miah",
};

export default function BlogWrapper() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Arif Miah Blog",
    url: "https://arif-miah-portfolio.vercel.app/blog",
    description:
      "Explore insightful blog posts by Arif Miah about web development, JavaScript, React, design, and full stack engineering.",
    author: {
      "@type": "Person",
      name: "Arif Miah",
    },
    publisher: {
      "@type": "Organization",
      name: "Arif Miah",
      logo: {
        "@type": "ImageObject",
        url: "https://arif-miah-portfolio.vercel.app/profile-photo.jpg",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient />
    </>
  );
}
