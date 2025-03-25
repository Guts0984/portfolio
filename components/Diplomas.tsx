import Link from "next/link";

function Diplomas() {
  const text = "You can also check my diplomas and certificates";
  const words = text.split(" ");

  return (
    <h2 className="relative mx-8 my-24 text-3xl font-bold text-zinc-800 dark:text-zinc-100">
      <Link href="/projects/diplomas" className="group flex items-center">
        <span className="inline-flex flex-wrap transition-all duration-300 group-hover:border-b-4 group-hover:border-nebula-purple group-hover:font-extrabold">
          {words.map((word, index) => (
            <span
              key={index}
              className="mr-1 transition-colors duration-300 hover:text-nebula-purple"
            >
              {word}
            </span>
          ))}
        </span>
        <div className="ml-2 inline-block">
          <video
            src="/loupe.webm"
            width={40}
            height={40}
            loop
            autoPlay
            muted
            className="rounded"
            aria-label="Magnifying glass animation"
          />
        </div>
      </Link>
    </h2>
  );
}

export default Diplomas;
