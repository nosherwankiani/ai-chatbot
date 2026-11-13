import type { Metadata } from "next";
import Link from "next/link";
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Geist } from "next/font/google";
import { Bot } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Chatbot",
  description:
    "A multi-turn AI chatbot with streaming responses, persistent memory and voice.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} min-h-dvh antialiased`}>
        <ClerkProvider>
          <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 backdrop-blur sm:px-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
                <Bot className="h-5 w-5" />
              </span>
              AI Chatbot
            </Link>

            <div className="flex items-center gap-3">
              <Show when="signed-out">
                <SignInButton mode="modal" forceRedirectUrl="/chat">
                  <button className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white">
                    Sign in
                  </button>
                </SignInButton>
                <SignUpButton mode="modal" forceRedirectUrl="/chat">
                  <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500">
                    Sign up
                  </button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <Link
                  href="/chat"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  Chat
                </Link>
                <UserButton />
              </Show>
            </div>
          </header>
          <main>{children}</main>
        </ClerkProvider>
      </body>
    </html>
  );
}