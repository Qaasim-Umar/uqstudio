import "../styles/global.css";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";

const siteUrl = "https://uqstudio.site";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "UQ Studio | Web & Mobile Product Studio",
    template: "%s | UQ Studio",
  },
  description:
    "UQ Studio designs and develops conversion-focused websites and reliable mobile applications for growing businesses.",
  keywords: [
    "UQ Studio",
    "Web Development Agency",
    "React Developer",
    "Next.js Developer",
    "Web Design Agency",
    "Web Developer Nigeria",
  ],
  authors: [{ name: "UQ Studio", url: siteUrl }],
  creator: "UQ Studio",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "UQ Studio | Web & Mobile Product Studio",
    description:
      "Conversion-focused websites and reliable mobile applications built for growing businesses.",
    siteName: "UQ Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UQ Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UQ Studio | Web & Mobile Product Studio",
    description:
      "Conversion-focused websites and reliable mobile applications built for growing businesses.",
    creator: "@i_codejs",
    images: ["/og-image.png"],
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

export const viewport = {
  themeColor: "#191923",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('uq-theme')||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=t}catch(e){}})();`,
          }}
        />
        {/* react-slick css */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
