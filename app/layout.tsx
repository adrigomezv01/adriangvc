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
  title: "Adrián Gómez-Valadés | Junior IAM & Cybersecurity Analyst",
  description:
    "Junior IAM & Cybersecurity Analyst specialized in SailPoint IdentityIQ, Microsoft Entra ID, Azure Security and digital forensics (DFIR). Available for technology consultancy roles in Spain and internationally.",
  keywords: [
    "SailPoint IdentityIQ",
    "IAM consultant junior",
    "Identity Access Management",
    "Azure Security",
    "Microsoft Entra ID",
    "RBAC",
    "Zero Trust",
    "DFIR analyst",
    "cybersecurity junior Spain",
    "Blue Team",
    "SC-900",
    "AZ-900",
    "VolatixLab",
  ],
  authors: [{ name: "Adrián Gómez-Valadés Castaño" }],
  metadataBase: new URL("https://adriangvc.com"),
  openGraph: {
    title: "Adrián Gómez-Valadés | Junior IAM & Cybersecurity Analyst",
    description:
      "Specialized in SailPoint IdentityIQ, Microsoft Entra ID, Azure Security and DFIR. SC-900 & AZ-900 certified. Available immediately.",
    url: "https://adriangvc.com",
    siteName: "Adrián GVC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adrián Gómez-Valadés — Junior IAM & Cybersecurity Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrián Gómez-Valadés | Junior IAM & Cybersecurity Analyst",
    description:
      "Specialized in SailPoint IdentityIQ, Microsoft Entra ID, Azure Security and DFIR. SC-900 & AZ-900 certified.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
