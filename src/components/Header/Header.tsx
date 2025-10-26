"use client";

import { useEffect, useRef, useState } from "react";
import { logo } from "@/static/images";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import GetDemo from "../CTA/GetDemo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      const totalHeight = headerRef.current.clientHeight + 250;
      setScrolled(window.scrollY >= totalHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      ref={headerRef}
      className={`px-3 md:px-12 gap-4 flex items-center justify-between sticky top-0 z-50 bg-white ${
        scrolled ? "scrolled" : ""
      }`}
    >
      {/* Left side: Logo + Desktop nav */}
      <div className="flex items-center justify-start gap-8">
        <Link href="/">
          <Image src={logo} height={28} width={309} alt="broadbanduk logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                className="py-2.5 text-corporate-black hover:text-corporate-blue transition"
                href="#agents"
              >
                Agents
              </Link>
            </li>
            <li>
              <Link
                className="py-2.5 text-corporate-black hover:text-corporate-blue transition"
                href="#software-company"
              >
                Software company
              </Link>
            </li>
            <li>
              <Link
                className="py-2.5 text-corporate-black hover:text-corporate-blue transition"
                href="#integration"
              >
                Integration
              </Link>
            </li>
            <li>
              <Link
                className="py-2.5 text-corporate-black hover:text-corporate-blue transition"
                href="#faq"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Right side: Auth buttons */}
      <div className="hidden md:flex py-4 [.scrolled_&]:py-3 transition-all duration-300 items-center justify-end gap-4">
        {/*<button className="py-2.5 px-4 cursor-pointer rounded-full text-corporate-black transition-all duration-300 ease-in-out border border-transparent hover:border-corporate-blue">
          Log in
        </button>
        <button className="py-2.5 px-4 cursor-pointer bg-corporate-blue text-white transition-all duration-300 ease-in-out rounded-full hover:opacity-80">
          Sign Up
        </button>*/}
        <GetDemo />
      </div>

      {/* Burger menu button (mobile only) */}
      <button
        className="md:hidden p-2 text-corporate-black"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col p-6 gap-4">
            <Link
              href="#agents"
              onClick={() => setIsOpen(false)}
              className="py-2 text-corporate-black hover:text-corporate-blue transition"
            >
              Agents
            </Link>
            <Link
              href="#software-company"
              onClick={() => setIsOpen(false)}
              className="py-2 text-corporate-black hover:text-corporate-blue transition"
            >
              Software company
            </Link>
            <Link
              href="#integration"
              onClick={() => setIsOpen(false)}
              className="py-2 text-corporate-black hover:text-corporate-blue transition"
            >
              Integration
            </Link>
            <Link
              href="#faq"
              onClick={() => setIsOpen(false)}
              className="py-2 text-corporate-black hover:text-corporate-blue transition"
            >
              FAQ
            </Link>

            <GetDemo />
            {/*<div className="flex flex-col gap-3 mt-4">
              <button className="w-full py-2.5 rounded-full text-corporate-black border border-transparent hover:border-corporate-blue">
                Log in
              </button>
              <button className="w-full py-2.5 rounded-full bg-corporate-blue text-white hover:opacity-80">
                Sign Up
              </button>
            </div>*/}
          </nav>
        </div>
      )}
    </header>
  );
}
