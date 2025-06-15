// app/contact/page.tsx
import ContactClient from './ContactClient'

export const metadata = {
  title: "Contact | Arif Miah Portfolio",
  description:
    "Get in touch with Arif Miah, a passionate full-stack MERN developer. Use the contact form to reach out for collaboration, hiring, or just saying hello!",
  keywords: [
    "Contact Arif Miah",
    "Full Stack Developer Contact",
    "Hire Arif Miah",
    "Arif Miah Portfolio",
    "Web Developer Bangladesh",
    "MERN Stack Contact",
  ],
  metadataBase: new URL("https://arif-miah-portfolio.vercel.app"),
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Arif Miah Portfolio",
    description:
      "Reach out to Arif Miah for freelance or full-time web development work. Let's collaborate on something awesome!",
    url: "https://arif-miah-portfolio.vercel.app/contact",
    siteName: "Arif Miah Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://arif-miah-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Arif Miah - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Arif Miah Portfolio",
    description:
      "Reach out to Arif Miah, MERN stack developer, for work opportunities and collaboration.",
    site: "@arifmiah01",
    images: ["https://arif-miah-portfolio.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Arif Miah", url: "https://arif-miah-portfolio.vercel.app" }],
  creator: "Arif Miah",
  publisher: "Arif Miah",
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Arif Miah",
    description:
      "Get in touch with Arif Miah, a MERN stack web developer based in Chittagong, Bangladesh. Open to freelance or full-time roles.",
    url: "https://arif-miah-portfolio.vercel.app/contact",
    mainEntity: {
      "@type": "Person",
      name: "Arif Miah",
      email: "arifmiah.me101@gmail.com",
      jobTitle: "Full Stack Web Developer",
      sameAs: [
        "https://github.com/arifmiah07",
        "https://linkedin.com/in/arifmiah07",
        "https://x.com/arifmiah01"
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
