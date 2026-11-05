import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "George Romany — Software Engineer & Full-Stack Web Developer",
  description:
    "Professional portfolio of George Romany — Software Engineer & Full-Stack Web Developer specializing in React, Next.js, Node.js, and modern web architectures.",
  keywords: [
    "George Romany",
    "Software Engineer",
    "Full-Stack Web Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React.js",
    "Node.js",
    "Cairo Egypt",
    "Portfolio",
  ],
  authors: [{ name: "George Romany" }],
  
  
  icons: {
    icon: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D0E11",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-screen flex flex-col selection:bg-[#00F299]/30 selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
