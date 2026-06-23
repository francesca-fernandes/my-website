"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "about" },
  { href: "https://notesfromababytheorist.substack.com", label: "blog" },
  { href: "/cv", label: "cv" },
  { href: "/tutoring", label: "tutoring" },
  { href: "/contact", label: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="mx-auto relative flex max-w-5xl items-baseline justify-between px-6 py-6 md:py-10">

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl text-foreground"
        >
          ☰
        </button>

        {/* LOGO */}
        <Link
          href="/"
          style={{ fontFamily: "var(--font-eb-garamond)" }}
          className="name-hover pl-2 lg:pl-0 text-4xl md:text-6xl tracking-tight text-foreground mx-auto lg:mx-0"
        >
          <span className="hidden md:inline text-5xl">⟡</span>{" "}
          <span style={{ fontFamily: "Barbra" }}>
            {"francesca fernandes".split("").map((char, i) => (
              <span
                key={`${char}-${i}`}
                className="name-letter"
                style={{ "--d": `${i * 0.05}s` } as React.CSSProperties}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>{" "}
          <span className="hidden md:inline text-5xl">⟡</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.href.startsWith("http") ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-foreground"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* divider */}
      <div className="mx-auto max-w-5xl border-b border-foreground/20 mt-[-20] md:mt-[-30]" />


      {/* MOBILE MENU (NOW INSIDE COMPONENT RETURN) */}
      {open && (
        <div className="lg:hidden left-0 w-full bg-background z-50 border-t border-foreground/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) =>
            link.href.startsWith("http") ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}