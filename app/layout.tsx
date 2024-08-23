import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn
} from '@clerk/nextjs'
import NavBar from "./ui/navigation";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
      <SignedIn>
      <main className="flex h-screen w-screen justify-center items-center flex-wrap flex-col bg-light-yellow text-oxford-blue">
        <NavBar />
        {children}
      </main>
      </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
      </body>
    </html>
    </ClerkProvider>
  );
}
