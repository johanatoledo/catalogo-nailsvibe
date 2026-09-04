"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`relative  w-full z-10 bg-juliana-gray/60 backdrop-blur-md transition-transform duration-400 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-center px-8 py-8">
        <Link href="/">
          <Image
            src="/branding/julianalogo.png"
            alt="Logo Juliana"
            width={300}
            height={300}
            className="object-contain rounded-full transition-all duration-300 hover:scale-105"
            priority
          />
        </Link>
      </nav>
    </header>
  );
}