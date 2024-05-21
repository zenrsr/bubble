import { LockIcon } from "@/constants/iconsData";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-50 py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <LockIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">NoteLock</span>
        </div>
        <nav className="flex gap-4 md:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
        <p className="text-sm mt-4 md:mt-0">
          © 2024 NoteLock. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
