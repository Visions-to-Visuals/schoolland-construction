import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Schoolland Construction - Home Builders in Ripon & Modesto CA",
  description: "Family-owned construction company in Ripon, CA serving Modesto, Salida, Manteca & San Joaquin County. 50+ years of home building, remodeling & construction excellence. Specializing in new homes, kitchens, bathrooms, and custom remodels.",
  keywords: "home builders Ripon, construction Modesto, remodels Salida, Manteca construction, San Joaquin family owned construction, Schoolland Construction, residential construction Central Valley, custom homes, kitchen remodeling, bathroom remodeling",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://schoollandconstruction.com',
    siteName: 'Schoolland Construction Inc',
    title: 'Schoolland Construction - Premier Home Builders in Central Valley',
    description: '50+ years of construction excellence in Ripon, Modesto & San Joaquin County. Family-owned residential construction specializing in new homes and remodels.',
    images: [
      {
        url: '/images/owners.png',
        width: 1200,
        height: 630,
        alt: 'Tim and Greg Schoolland - Schoolland Construction',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://schoollandconstruction.com'
  },
  authors: [{ name: 'Schoolland Construction Inc' }],
  generator: 'Next.js',
  applicationName: 'Schoolland Construction',
  referrer: 'origin-when-cross-origin',
  creator: 'Schoolland Construction Inc',
  publisher: 'Schoolland Construction Inc',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" 
    className="
    monitor:text-[1.3rem]
    laptop:text-[.85rem] 
    laptop-s:text-[.75rem] 
    tablet:text-[1.2vw]
    tablet-s:text-[1rem]
    mobile:text-[.85rem]
    mobile-s:text-[.7rem]
    ">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Schoolland Construction Inc",
              "image": "/images/owners.png",
              "description": "Family-owned construction company serving Ripon, Modesto, Salida, Manteca & San Joaquin County for over 50 years",
              "url": "https://schoollandconstruction.com",
              "areaServed": ["Ripon", "Modesto", "Salida", "Manteca", "San Joaquin County", "Stanislaus County"],
              "priceRange": "$$",
              "knowsAbout": ["Home Building", "Kitchen Remodeling", "Bathroom Remodeling", "Custom Construction", "Home Renovation"],
              "sameAs": [],
              "founders": [
                {
                  "@type": "Person",
                  "name": "Tim Schoolland"
                },
                {
                  "@type": "Person",
                  "name": "Greg Schoolland"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ripon",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 37.7395,
                "longitude": -121.1354
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
