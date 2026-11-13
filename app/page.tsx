import Link from "next/link";
import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Bot, Database, Mic, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Streaming responses",
    text: "Answers appear word by word in real time, powered by the Vercel AI SDK.",
  },
  {
    icon: Database,
    title: "Persistent memory",
    text: "Every message is saved to MongoDB, so the bot remembers your whole conversation.",
  },
  {
    icon: Mic,
    title: "Voice in and out",
    text: "Speak your question and hear the answer read back to you.",
  },
  {
    icon: ShieldCheck,
    title: "Secure sign-in",
    text: "Authentication by Clerk keeps each user's history private.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="flex flex-col items-center py-20 text-center sm:py-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
          <Bot className="h-4 w-4" />
          Powered by Gemini
        </div>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
          An AI assistant that{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            remembers
          </span>{" "}
          your conversation
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          Multi-turn conversations with real memory, streaming answers and voice
          control. Sign in and pick up exactly where you left off.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Show when="signed-out">
            <SignUpButton mode="modal" forceRedirectUrl="/chat">
              <button className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500">
                Get started free
              </button>
            </SignUpButton>
            <SignInButton mode="modal" forceRedirectUrl="/chat">
              <button className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:bg-slate-800">
                Sign in
              </button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <Link
              href="/chat"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500"
            >
              Open chat
            </Link>
          </Show>
        </div>
      </section>

      <section className="grid gap-4 pb-20 sm:grid-cols-2">
        {features.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/15 text-indigo-400">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-white">{title}</h3>
            <p className="mt-1 text-sm text-slate-400">{text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}