"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

export const links = [
  { label: "Nossa Historia", url: "history" },
  { label: "Cerimônia", url: "ceremony" },
  { label: "Recepção", url: "reception" },
  { label: "Confirmação", url: "confirmation" },
  { label: "Presentes", url: "presents" },
];

const HeaderLinks = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <nav
      className={cn(
        "items-center gap-8 justify-center pb-6",
        isMobile ? "flex" : "hidden xl:flex"
      )}
    >
      {links.map((link) => (
        <Link
          href={`#${link.url}`}
          key={link.label}
          className="font-inter text-[1.5rem] font-light"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderLinks;
