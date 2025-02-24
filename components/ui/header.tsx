"use client";

import Link from "next/link";
import Logo from "./logo"; 
import { ReactNode } from "react";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3  before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]  before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Button href="/aboutus">Services</Button>
            </li>
            <li>
              <Button href="/signup">Projects</Button>
            </li>
            <li>
              <Button href="/signup">Equipments</Button>
            </li>
            <li>
              <Button href="/aboutus">About Us</Button>
            </li>
            <li>
              <Button href="/signup">Contact Us</Button>
            </li>
          </ul>
        </div>
      </div>
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