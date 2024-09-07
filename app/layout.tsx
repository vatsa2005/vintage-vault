import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Bitcoin,
  CreditCard,
  Handshake,
  Home,
  MessageSquare,
  Plus,
  Telescope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-10 bg-[#C39D76]">
            <Header />
          </header>
          <div className="flex flex-1 flex-col md:flex-row lg:flex-row w-full bg-[#C5A687]">
            <section className="hidden sticky h-screen top-0 flex-col justify-evenly items-start col-span-2 px-5 md:flex lg:flex">
              <Button
                className="flex justify-center items-center h-15 w-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9C7240] to-[#362816F2]"
                asChild
              >
                <Link href="/">
                  Buy
                  <div className="mx-2">
                    <CreditCard />
                  </div>
                </Link>
              </Button>
              <Button
                className="flex justify-center items-center h-15 w-35 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9C7240] to-[#362816F2]"
                asChild
              >
                <Link href="/">
                  Sell
                  <div className="mx-2">
                    <Handshake />
                  </div>
                </Link>
              </Button>
              <Button
                className="flex justify-center items-center h-15 w-25 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9C7240] to-[#362816F2]"
                asChild
              >
                <Link href="/">
                  NFT's
                  <div className="mx-2">
                    <Bitcoin />
                  </div>
                </Link>
              </Button>
            </section>
            <div className="flex-1">{children}</div>
            <footer className="md:hidden lg:hidden sticky bottom-0 py-3 flex justify-evenly bg-[#C39D76]">
              <Link href="/">
                <Home className="icon w-8 h-8" />
              </Link>
              <Link href="/">
                <Telescope className="icon w-8 h-8" />
              </Link>
              <Link href="/">
                <MessageSquare className="icon w-8 h-8" />
              </Link>
              <Link href="/">
                <Plus className="icon w-8 h-8" />
              </Link>
            </footer>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
