// app/projects/page.tsx

import { Metadata } from "next"
import ProjectsClient from "@/components/projects/ProjectsClient"

export const metadata: Metadata = {
  title: "Projects | Arif Miah Portfolio",
  description:
    "Explore full-stack projects by Arif Miah showcasing React, Next.js, Tailwind CSS, and modern technologies.",
  keywords: [
    "Arif Miah Projects",
    "React Projects",
    "Next.js Portfolio",
    "Tailwind CSS",
    "Full Stack Developer",
    "Web Development Portfolio",
  ],
  metadataBase: new URL("https://arif-miah-portfolio.vercel.app"),
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Arif Miah Portfolio",
    description:
      "Explore full-stack projects by Arif Miah showcasing React, Next.js, Tailwind CSS, and modern technologies.",
    url: "https://arif-miah-portfolio.vercel.app/projects",
    siteName: "Arif Miah Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://arif-miah-portfolio.vercel.app/og-image-projects.png",
        width: 1200,
        height: 630,
        alt: "Arif Miah Projects Page Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Arif Miah Portfolio",
    description:
      "Explore full-stack projects by Arif Miah showcasing React, Next.js, Tailwind CSS, and modern technologies.",
    site: "@arifmiahdev",
    images: ["https://arif-miah-portfolio.vercel.app/og-image-projects.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Arif Miah", url: "https://arif-miah-portfolio.vercel.app/projects" }],
  creator: "Arif Miah",
  publisher: "Arif Miah",
}

export default function ProjectsWrapper() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Arif Miah Projects",
    url: "https://arif-miah-portfolio.vercel.app/projects",
    description:
      "Explore full-stack projects by Arif Miah showcasing React, Next.js, Tailwind CSS, and modern technologies.",
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
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectsClient />
    </>
  )
}
