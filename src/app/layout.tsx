import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { WorkoutProvider } from "../context/WorkoutContext";
import { ToastProvider } from "../context/ToastContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
    variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "FitLog",
  description: "Browse gym workouts, build today's plan, and track weekly calories with FitLog.",
  icons: {
    icon: "/favicon.ico",
  },
};

const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0f1115] text-[#e8eaef] font-sans selection:bg-[#c4f000] selection:text-black">
        <ToastProvider>
          <WorkoutProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </WorkoutProvider>
        </ToastProvider>
      </body>
    </html>
  );
};

export default RootLayout;