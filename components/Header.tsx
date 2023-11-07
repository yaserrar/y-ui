"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import { buttonVariants } from "./ui/button";

const Header = () => {
  return (
    <section
      className=" fixed top-0 left-0 w-full bg-white dark:bg-black z-50 opacity-90"
      id="contact"
    >
      <nav className="flex justify-between p-2 container max-w-7xl text-sm items-center opacity-100">
        <Link href="/" className="font-bold text-xl text-primary p-2">
          Y-UI
        </Link>
        <section className="gap-3 items-center hidden md:flex">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "link", size: "default" }))}
          >
            Home
          </Link>
          <Link
            href="/#about-us"
            className={cn(buttonVariants({ variant: "link", size: "default" }))}
          >
            About Us
          </Link>
          <Link
            href="/#contact-us"
            className={cn(buttonVariants({ variant: "link", size: "default" }))}
          >
            Contact Us
          </Link>
        </section>
        <div className="flex items-center gap-3">
          <DarkModeButton />
        </div>
      </nav>
    </section>
  );
};

export default Header;
