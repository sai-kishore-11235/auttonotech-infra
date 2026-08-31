import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Saira, Saira_Condensed } from "next/font/google";
import "./globals.css";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-saira",
});

const sairaCondensed = Saira_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-saira-condensed",
});

const ibmSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-sans",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-mono",
});

export const metadata: Metadata = {
  title: "Auttonotech Infrastructure Division — Building Tomorrow's Infrastructure",
  description:
    "Auttonotech Infrastructure Division. EPC contracting, civil construction, renewable energy, industrial and government infrastructure across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saira.variable} ${sairaCondensed.variable} ${ibmSans.variable} ${ibmMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
