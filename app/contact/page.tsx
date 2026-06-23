import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact",
  description: "Get in touch with Francesca Fernandes.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-4 md:py-10">
      <h1 className="text-3xl md:text-5xl tracking-tight text-foreground">
      <span className="underline underline-offset-6 decoration-1"> contact </span>
      </h1>
      <p className="mt-4 body-text text-text">
        please reach out! i'd love to hear from you!
      </p>

      <form className="mt-8 max-w-lg space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-base font-medium body-text text-text"
          >
            name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-2 w-full rounded-lg border border-foreground/30 bg-background px-4 py-2.5 body-text outline-none transition-colors focus:border-foreground"
            placeholder="your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block body-text font-medium text-text"
          >
            email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-2 w-full rounded-lg border border-foreground/30 bg-background px-4 py-2.5 body-text outline-none transition-colors focus:border-foreground"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block body-text font-medium text-text"
          >
            message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-2 w-full rounded-lg border border-foreground/30 bg-background px-4 py-2.5 body-text outline-none transition-colors focus:border-foreground"
            placeholder="what's on your mind?"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
        >
          send message
        </button>
      </form>

      <div className="mt-12 border-t border-foreground/20 pt-8">
        <p className="text-sm body-text/70">
          or reach out directly — frandes727 at gmail dot com :)
        </p>
      </div>
    </div>
  );
}
