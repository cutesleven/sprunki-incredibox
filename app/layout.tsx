import "./css/style.css";
import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Sprunki Retake - The Latest Version of Sprunki Incredibox",
  description:
    "Play Sprunki Retake, the newest version inspired by Sprunki Incredibox mod. Experience the enhanced Sprunki game with new sounds and features.",
  icons: {
    icon: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://sprunkiremake.net",
  },
  openGraph: {
    url: "https://sprunkiremake.net",
    siteName: "Sprunki Retake",
    title: "Sprunki Retake - The Latest Version of Sprunki Incredibox",
    type: "website",
    description:
      "Play Sprunki Retake, the newest version inspired by Sprunki Incredibox mod. Experience the enhanced Sprunki game with new sounds and features.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sprunki Retake - The Latest Version of Sprunki Incredibox",
    site: "https://sprunkiremake.net",
    description:
      "Play Sprunki Retake, the newest version inspired by Sprunki Incredibox mod. Experience the enhanced Sprunki game with new sounds and features.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XKZ5XQHMPH`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XKZ5XQHMPH');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
