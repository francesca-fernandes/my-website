export default function CVPage() {
    return (
      <div className="mx-auto max-w-5xl px-6 py-[-5] md:py-10">
  
        <div className="mt-10 h-[80vh] w-full border border-foreground/20">
          <iframe
            src="/CV.pdf"
            className="h-full w-full"
          />
        </div>
      </div>
    );
  }