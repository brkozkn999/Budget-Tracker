import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import RootProviders from "@/components/providers/RootProviders";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Budget Tracker",
  description: "made by brkozkn999",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <ClerkProvider>
      <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <link rel="icon" href="/favicon.png" type="image/png"/>
        <body className={inter.className}>
          <Toaster richColors position='bottom-right' />
          <RootProviders>{children}</RootProviders>
          </body>
      </html>
    </ClerkProvider>
  );
}
