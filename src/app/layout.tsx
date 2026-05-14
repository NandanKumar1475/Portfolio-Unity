import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nandan-kumar-xr.vercel.app"),
  title: {
    default: "Nandan Kumar | Unity XR Developer",
    template: "%s | Nandan Kumar",
  },
  description:
    "Portfolio of Nandan Kumar, Unity XR Developer specializing in AR/VR simulations, XR interaction systems, OpenXR, C#, and performance-focused immersive applications.",
  keywords: [
    "Nandan Kumar",
    "Unity XR Developer",
    "AR VR Simulation Engineer",
    "Unity Developer",
    "OpenXR",
    "XR Interaction Toolkit",
    "C#",
  ],
  authors: [{ name: "Nandan Kumar" }],
  creator: "Nandan Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nandan-kumar-xr.vercel.app",
    title: "Nandan Kumar | Unity XR Developer",
    description:
      "Recruiter-focused portfolio for Unity XR, AR/VR simulation, and performance-minded immersive application development.",
    siteName: "Nandan Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandan Kumar | Unity XR Developer",
    description:
      "Unity XR Developer specializing in interactive simulations, AR/VR workflows, and performance-focused immersive applications.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <AnimatedBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
