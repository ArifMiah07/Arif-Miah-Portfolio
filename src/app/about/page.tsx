import { Metadata } from "next";
import { education, experience, skills } from "@/lib/data2";
import AboutContent from "@/components/about/AboutContent";

const aboutDescription =
  "Learn more about Arif Miah, a passionate Full Stack Developer specializing in MERN stack. Discover my background, education, work experience, and technical skills.";

export const metadata: Metadata = {
  title: "About | Arif Miah Portfolio",
  description: aboutDescription,
  keywords: [
    "Arif Miah",
    "Full Stack Developer",
    "About Arif Miah",
    "MERN Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer Resume",
    "Developer Skills",
    "Software Engineer",
  ],
  authors: [{ name: "Arif Miah", url: "https://arif-miah-portfolio.vercel.app/about" }],
  creator: "Arif Miah",
  publisher: "Arif Miah",
  metadataBase: new URL("https://arif-miah-portfolio.vercel.app"),
  alternates: {
    canonical: "/about",
  },
  openGraph: {
  title: "About | Arif Miah Portfolio",
  description: aboutDescription,
  url: "https://arif-miah-portfolio.vercel.app/about",
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
    title: "About | Arif Miah Portfolio",
    description: aboutDescription,
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

export default function AboutPage() {
  // JSON-LD Structured Data for Person Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arif Miah",
    url: "https://arif-miah-portfolio.vercel.app/about",
    sameAs: [
      "https://github.com/arifmiah01",
      "https://linkedin.com/in/arifmiah",
      "https://twitter.com/arifmiah01",
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Self-employed",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Your University Name",
    },
    image: "https://arif-miah-portfolio.vercel.app/profile-photo.png",
    description: aboutDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent education={education} experience={experience} skills={skills} />
    </>
  );
}
