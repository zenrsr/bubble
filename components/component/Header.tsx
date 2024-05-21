import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { LockIcon } from "@/constants/iconsData";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-10 backdrop-blur-lg shadow-md flex h-16 items-center justify-between px-4 md:px-6 lg:px-8 border-b border-gray-200 z-10">
      <Link className="flex items-center gap-2 text-black" href="#">
        <LockIcon className="h-6 w-6 text-gray-900 " />
        <span className="text-lg font-semibold text-gray-900">NoteLock</span>
      </Link>
      <nav className="hidden md:flex items-center gap-4">
        <Link
          className="text-sm font-medium text-gray-600 hover:text-gray-900"
          href="#"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium text-gray-600 hover:text-gray-900"
          href="#"
        >
          Pricing
        </Link>
        <Link
          className="text-sm font-medium text-gray-600 hover:text-gray-900"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium text-gray-600 hover:text-gray-900"
          href="#"
        >
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="secondary">
          Sign In
        </Button>
        <Button size="sm">Sign Up</Button>
      </div>
    </header>
  );
};

export default Header;
