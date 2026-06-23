import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "tutoring",
  description: "Tutoring services offered by Francesca Fernandes.",
};

export default function TutoringPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-4 md:py-10">
      <h1 className="text-3xl md:text-5xl tracking-tight text-foreground">
        <span className="underline underline-offset-6 decoration-1"> college essay aid </span>
      </h1>

      <div className="mt-8 space-y-4 text-xl leading-9 body-text text-text">
        <p>
          as college admission rates plummet, it is <span className="highlight">
            more important than ever that your essays—and your story—stand out from the crowd
          </span>. with <span className="highlight-y">over five years of experience</span> and <span className="highlight-y">hundreds of students</span>, i can help you do that!
        </p>

        <div className="my-4 md:my-8 text-center">
          <p>
            <a
              href="https://calendly.com/frandes727/tutoring"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-black/80 px-3 py-2 md:px-5 md:py-4 text-3xl md:text-5xl text-black/80 transition hover:opacity-80 font-bold decoration-1"
            >
              book a lesson!

            </a>
          </p>
        </div>

        <p>
          the stories i created, advocating the ideals, people, and beliefs central to who i am, <span className="highlight">
            got me accepted by stanford, yale, columbia</span> (john jay scholar & likely letter), <span className="highlight"> brown, university of chicago</span> (president & dean's scholar), <span className="highlight"> barnard</span> (scholar of distinction & likely letter), <span className="highlight"> usc, rice, ucla, uc berkeley</span>
          , and more. as of 2026, i have also been awarded the <span className="highlight"> marshall, rhodes, and nsf grfp scholarships</span> (for graduate school).
        </p>

        <p>
          every year, <span className="highlight-y">students i have worked with have been accepted to stanford, harvard, princeton, mit, columbia, ucla, uc berkeley, and more.</span>
        </p>

        <p>
          i will not write essays nor "heavily revise," but i promise to help share your story in the light truest to you. i specialize in cutting (not exceeding word count), reflection (finding the central theme of each essay and your portfolio), flow, grammar, and storytelling in creative ways. <span className="highlight">samples of my work can be found    <a
            href="https://drive.google.com/file/d/1hnSzO4bOWrm_wP5ZvHAX-L6fjV5pRSGd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 decoration-1"
          >
            here

          </a></span>.
        </p>

      </div>

      {/* RATES */}
      <details className="mt-6">
        <summary className="cursor-pointer text-xl font-medium text-foreground list-none hover:opacity-70 transition">
          <span className="flex items-center gap-2">
            rates / logistics <span className="text-base font-semibold">▾</span>
          </span>
        </summary>

        <div className="mt-3 space-y-3 text-xl body-text leading-9 text-text">
          <p>
            i charge using <span className="highlight">paypal (@frandes727 AT gmail DOT com)</span> and <span className="highlight">venmo (@francesca-fernandes)</span>.
          </p>

          <p>
            for <span className="highlight-y">synchronous</span> personal tutoring (highly recommended), my rate is <span className="highlight">$175/hour</span>. i recommend weekly hour-long sessions, and tutor using zoom. <span className="highlight-y">payment must be made at least 24 hours before the meeting</span>, or i reserve the right to cancel.
            due to my own time constraints, if requests for rescheduling—due to reasons other than illness or emergency—are made within 24 hours of the lesson, i will charge an additional $20.
          </p>
          <p>
            for detailed <span className="highlight-y">asynchronous</span> one-time edits and feedback, my rate is <span className="highlight">$50 for supplements (under 350 words), $90 for the Common/Coalition App. (350-650 words), and $125 for
              other long-form essays (650-1000 words)</span>. <span className="highlight-y">payment must be received before essay feedback is given.</span> essays will be returned, with feedback, <span className="highlight">within 5 business days</span>. for anything faster ("rush order"), i charge double the rate; please email me if you'd
            like to pursue this option. note that i cannot always complete rush orders.
          </p>
        </div>
      </details>

      {/* TESTIMONIES */}
      <details className="mt-6">
        <summary className="cursor-pointer text-xl font-medium text-foreground list-none hover:opacity-70 transition">
          <span className="flex items-center gap-2">
            testimonies <span className="text-base font-semibold">▾</span>
          </span>
        </summary>

        <div className="mt-3 space-y-3 text-xl body-text leading-9 text-text">
          <p>
            <span className="highlight">from students: </span>
          </p>

          <p>
            "francesca was very helpful and relieved a lot of stress for me in the essay writing process. before our first meeting i was quite anxious about having a tutor, but she was super friendly and welcoming. francesca's process for assisting brainstorming allowed me to think more precisely and intentionally about the story and details i wanted to convey. [she] was an incredible asset, [and] i was always excited whenever we met. because of her enthusiasm, i always left feeling accomplished and impassioned to continue working on my writing."
          </p>

          <p>
            "[francesca] is very friendly, accomodating, and sharp. she made me feel accomplished in my writing, while also giving me great advice and insights on my essays that i would've otherwise never thought about. when i first started writing my college essays, i felt totally lost, but francesca's tutoring really helped me find a sense of direction. now, i feel more relaxed about college applications altogether."
          </p>
          <p>
            "francesca helped me find my voice and confidence while writing; her guidance was immensely helpful!"
          </p>

          <p>
            <span className="highlight">from colleges: </span>
          </p>


          <p>
            <span className="font-medium"> columbia</span> - "francesca, after reading your application, i knew that you would be the perfect addition to columbia's community of young, bright, and talented john jay scholars. your grit, passion, and love for performing shines through each part of your application, and the level of historical analysis that you are able to perform is absolutely fascinating. i adored the creative spins you took on each of your essays - what a treat to read! your intellectual spirit and love for learning are unmatched. congratulations and i hope to see you in the fall!"
          </p>

          <p>
            <span className="font-medium"> yale</span> - "francesca, welcome to yale! your care for others shines through so much of your wonderful application. i can easily envision you continuing to approach the study of history in creative ways and joyfully participating in our vibrant performing arts scene here."
          </p>
          <p>
            <span className="font-medium"> stanford</span> - "francesca, my favorite moment in your application was when you described 3 styles of dresses in your wardrobe and the historical women they represent [my intellectual vitality essay]. your analysis is fascinating and speaks to your phenomenal potential not only to connect with history but also to engage in groundbreaking scholarship. you are also an amazing community member with your work on sos and shsc [groups i led and mentioned in my community essay]. congratulations!"
          </p>

        </div>
      </details>

      <div className="mt-3 space-y-3 text-xl leading-9 text-text">

      </div>
    </div>
  );
}