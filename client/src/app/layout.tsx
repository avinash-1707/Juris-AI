import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { ReactQueryProvider } from "@/providers/tanstack/react-query-provider";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/modals/modal-providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JurisAI | AI-Powered Legal Document Analysis",
  description:
    "JurisAI helps lawyers, startups, and businesses analyze contracts and legal documents using AI. Detect risks, missing clauses, and compliance issues instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <Header />
          <ModalProvider>{children}</ModalProvider>
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
