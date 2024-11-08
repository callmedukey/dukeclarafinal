"use client";
import { DialogDescription } from "@radix-ui/react-dialog";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { links } from "./HeaderLinks";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger
        className="absolute right-4 focus:outline-none"
        aria-label="모바일 메뉴"
      >
        <MenuIcon className="size-8" />
      </DrawerTrigger>
      <DrawerContent className="flex space-y-4 px-8 py-12 text-xl">
        <DrawerTitle className="sr-only">Menu</DrawerTitle>
        <DialogDescription className="sr-only">Mobile Menu</DialogDescription>
        <nav className="flex flex-col space-y-4">
          {links.map((link) => (
            <Link
              href={`#${link.url}`}
              key={link.label}
              className="text-left font-inter text-[1.5rem] font-light"
            >
              <DrawerClose>{link.label}</DrawerClose>
            </Link>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
