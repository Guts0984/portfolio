import React from "react";
import HoverEffect from "./ui/HoverEffect";

// Navigation data with inline SVG icons
const navigation = [
  {
    name: "GitHub",
    href: "https://github.com/Guts0984",
    icon: (
      <svg
        className="h-10 w-10 text-zinc-400 transition-colors duration-200 group-hover:text-nebula-purple"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dariy-petrishyn-354905353/", // Replace with your LinkedIn URL
    icon: (
      <svg
        className="h-10 w-10 text-zinc-400 transition-colors duration-200 group-hover:text-nebula-purple"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="w-full border-t border-star-white/20 py-6 text-center text-white">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center transition hover:scale-105"
            >
              {item.icon}
              <HoverEffect />
              <span className="sr-only">{item.name}</span>
            </a>
          ))}
        </div>
        <div className="text-muted-foreground text-sm text-zinc-950 dark:text-zinc-50">
          © {new Date().getFullYear()} Dariy Petryshyn. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
