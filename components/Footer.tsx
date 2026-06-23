export default function Footer() {
  return (
    <footer className="border-t border-foreground/20">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-text/70">
        <p>
          &copy; {new Date().getFullYear()} francesca fernandes. all rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
