import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrolling } from "@/components/ui/SmoothScrolling";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Finch Global Agency | Premium Digital Solutions",
    template: "%s | Finch Global Agency",
  },
  description: "Finch Global Agency is a premium digital agency delivering pixel-perfect web experiences, UI/UX design, and growth strategies for ambitious brands.",
  keywords: ["Digital Agency", "Web Development", "UI/UX Design", "E-Commerce", "Digital Marketing", "Next.js", "React"],
  authors: [{ name: "Finch Global Team" }],
  creator: "Finch Global Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://finchglobal.agency",
    title: "Finch Global Agency | Premium Digital Solutions",
    description: "Pixel-perfect web experiences and growth strategies for ambitious brands.",
    siteName: "Finch Global Agency",
    images: [
      {
        url: "/og-image.jpg", // We'll need to make sure this exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "Finch Global Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finch Global Agency | Premium Digital Solutions",
    description: "Pixel-perfect web experiences and growth strategies for ambitious brands.",
    images: ["/og-image.jpg"],
    creator: "@finchglobal",
  },
  icons: {
    icon: [
      { url: "/favicon-light.svg", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.svg", media: "(prefers-color-scheme: dark)" },
    ],
  },
  metadataBase: new URL("https://finchglobal.agency"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          outfit.variable
        )}
      >
        <SmoothScrolling>
          <CustomCursor />
          {children}
        </SmoothScrolling>
        <Footer />
      </body>
    </html>
  );
}
