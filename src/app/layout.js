import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Evangeline Okeke - Digital Marketing, Brand Experiences & Execution",
  description: "Evangeline Okeke works across digital marketing, sales, brand experiences, coordination and emerging AI workflows.",
  openGraph: { title: "Evangeline Okeke", description: "Digital Marketing, Brand Experiences & Execution", images: ["/images/hero-conceptual.png"] },
  icons: { icon: "/images/hero-conceptual.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${plusJakartaSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
