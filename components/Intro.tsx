import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              Hey, I&apos;m Dariy
            </h1>
            <p className="text-muted-foreground text-xl">
              Front-end Software Engineer based in Kyiv, Ukraine
            </p>
            <p className="text-lg text-foreground">
              I build sleek, functional websites with a focus on clean code and
              solid design. When I’m not coding, I’m usually digging into new
              tech.
            </p>
          </div>

          <div className="flex flex-1 justify-center">
            <div className="border-primary relative h-64 w-64 overflow-hidden rounded-full border-4 md:h-80 md:w-80">
              <Image
                src="/images/authors/ayanami-rei.jpeg"
                alt="Dariy - Front-end Engineer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
