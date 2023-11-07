"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const AboutUs = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="mt-10" id="about-us">
      <p className="text-4xl text-primary font-semibold w-full text-center py-6">
        About Us
      </p>
      <div className="grid md:grid-cols-4 grid-cols-1 items-center gap-10">
        <div className="font-medium mt-4 md:col-span-2 col-span-1 text-lg">
          <p className="mb-4">
            At AI Art Gallery, we are passionate about bringing art to life
            through the power of technology.
          </p>
          <p>
            Our mission is to bridge the gap between the traditional and digital
            art worlds, offering a unique platform where art enthusiasts and
            collectors can explore, appreciate, and acquire virtual
            masterpieces. We believe that art should be accessible to all, and{" "}
            {"we've"}
            harnessed the potential of artificial intelligence to create an
            immersive, interactive, and inclusive gallery experience.
          </p>
        </div>

        <div className="flex justify-center md:col-span-2 col-span-1 p-4">
          <Image
            className="rounded-lg"
            src={theme === "dark" ? "/about-dark.png" : "/about.png"}
            alt="about image"
            height={600}
            width={600}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
