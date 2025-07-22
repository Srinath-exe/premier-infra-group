"use client";

import Link from "next/link";
import Logo from "./logo";
import { ReactNode, useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Mobile menu button */}
            <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              style={{ fontSize: "2rem", fontWeight: "bold", padding: "0.75rem" }}
            >
              <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
              </svg>
            </button>
            </div>

            {/* Desktop sign in links */}
            <ul className="hidden md:flex flex-1 items-center justify-end gap-3">
            <li>
              <Button href="/project">Projects</Button>
            </li>
            <li>
              <Button href="/equipments">Equipments</Button>
            </li>
            <li>
              <Button href="/aboutus">About Us</Button>
            </li>
            <li>
              <Button href="/contact">Contact Us</Button>
            </li>
            </ul>
          </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center gap-3 mt-4">
            <li>
              <Button href="/project">Projects</Button>
            </li>
            <li>
              <Button href="/equipments">Equipments</Button>
            </li>
            <li>
              <Button href="/aboutus">About Us</Button>
            </li>
            <li>
              <Button href="/contact">Contact Us</Button>
            </li>
            </ul>
          </div>
      )}
    </header>
  );
}

interface ButtonProps {
  href: string;
  children: ReactNode;
}

export function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="btn-sm relative text-red-500 bg-transparent py-[5px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent hover:bg-red-500 hover:text-white"
    >
      {children}
    </Link>
  );
}