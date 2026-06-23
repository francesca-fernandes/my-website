"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
    "/pics/meow.jpg",
    "/pics/4.jpg",
    "/pics/1.JPEG"
];

export default function AboutSlideshow() {
    const [index, setIndex] = useState(0);

    function nextImage() {
        setIndex((prev) => (prev + 1) % images.length);
    }

    function prevImage() {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    }

    return (
        <div className="w-full md:w-1/2 relative md:-mt-24">
            <div className="h-full scale-85 md:scale-100">
                <Image
                    src={images[index]}
                    alt="Francesca Fernandes"
                    width={1000}
                    height={800}
                    className="h-full w-auto object-cover"
                />

                {/* LEFT ARROW */}
                <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2
                     text-foreground/60 hover:text-foreground
                     opacity-0 group-hover:opacity-100 transition"
                >
                    ‹
                </button>

                {/* RIGHT ARROW */}
                <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2
                     text-foreground/60 hover:text-foreground
                     opacity-0 group-hover:opacity-100 transition"
                >
                    ›
                </button>


                {/* optional controls */}
                <div className="mt-4 flex justify-between text-sm text-text">
                    <button onClick={prevImage} className="hover:opacity-70">
                        prev
                    </button>

                    <span>
                        {index + 1} / {images.length}
                    </span>

                    <button onClick={nextImage} className="hover:opacity-70">
                        next
                    </button>
                </div>
            </div>
            </div>
    );
}