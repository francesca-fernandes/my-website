import Image from "next/image";
import Link from "next/link";
import AboutSlideshow from "@/components/AboutSlideshow";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-4 md:py-10">
      <h1 className="text-3xl md:text-5xl tracking-tight text-foreground">
        <span className="underline underline-offset-6 decoration-1"> about </span>
      </h1>

      <div className="mt-6 md:mt-10 flex flex-col md:flex-row md:gap-10 items-stretch">



        {/* TEXT */}
        <div className="w-full md:w-2/3 max-w-prose space-y-3 md:space-y-4 body-text text-text">

          <p>hi!</p>

          <p>i&apos;m francesca! </p>

          <p>
            i&apos;m a {" "}
            <span className="highlight">
              first-year physics phd @ caltech
            </span>, interested in the intersections between <span className="highlight">
              high-energy theory
            </span> (hep-th) and {" "}
            <span className="highlight">
              mathematical physics
            </span> (math-ph).
          </p>

          <p>
            previously, i was a rhodes scholar @ oxford, and obtained my bachelor's w/ honors in
            physics—and a minor in mathematics—from stanford. i completed my {" "}
            <a
              href="https://purl.stanford.edu/dg037gs2713"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-1"
            >
              honors thesis

            </a> {" "}

            under prof.
            lance dixon (slac, hep-th), and have also been fortunate to work w/ {" "}

            <a
              href="https://www.sciencedirect.com/science/article/abs/pii/S0393044025001524"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-1"
            >
              matilde marcolli (caltech, math-ph)

            </a>,
            hideo mabuchi (stanford, quantum engineering), and susan clark (stanford, astrophysics).
          </p>

          <p>
            i am deeply passionate about <span className="highlight">expanding representation within physics and mathematics</span>.
          </p>

          <p>
            outside physics, i enjoy performing (singing, dancing, acting, stand-up comedy),{" "}
            <a
              href="https://notesfromababytheorist.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-1"
            >
              writing

            </a>, <a
              href="https://www.goodreads.com/user/show/21552614-francesca-fernandes"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-1"
            >
              reading

            </a>, and hosting.
          </p>

        </div>

        <AboutSlideshow />

      </div>
    </div>
  );
}


