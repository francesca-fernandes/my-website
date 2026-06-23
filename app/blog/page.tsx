import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "blog",
  description: "Blog posts by Francesca Fernandes.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-5xl tracking-tight text-foreground">
        blog
      </h1>
      <p className="mt-4 text-xl leading-9 text-text">
        Thoughts, notes, and updates. Swap these placeholders with your own
        writing.
      </p>

    </div>
  );
}
