import { FileTextIcon, KeyIcon, SettingsIcon } from "@/constants/iconsData";
import { HomeIcon, LockOpenIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotesNav = () => {
  return (
    <div className="flex min-h-full">
      <aside className="bg-[#2C2C2E] p-6">
        <Link
          className="flex items-center space-x-2 text-white mb-10 cursor-pointer"
          href={"/homepage"}
        >
          <LockOpenIcon className="h-6 w-6" />
          <span className="font-bold text-lg">NoteLock</span>
        </Link>
        <nav className="space-y-2">
          <Link
            className="flex items-center space-x-2 text-white py-2 px-4 rounded-lg hover:bg-[#3A3A3C] transition-colors"
            href="/homepage"
          >
            <HomeIcon className="h-5 w-5" />
            <span className="hidden md:block">Home</span>
          </Link>
          <Link
            className="flex items-center space-x-2 text-white py-2 px-4 rounded-lg hover:bg-[#3A3A3C] transition-colors"
            href="/notes"
          >
            <FileTextIcon className="h-5 w-5" />
            <span className="hidden md:block">Notes</span>
          </Link>
          <Link
            className="flex items-center space-x-2 text-white py-2 px-4 rounded-lg hover:bg-[#3A3A3C] transition-colors"
            href="/passwords"
          >
            <KeyIcon className="h-5 w-5" />
            <span className="hidden md:block">Passwords</span>
          </Link>
          <Link
            className="flex items-center space-x-2 text-white py-2 px-4 rounded-lg hover:bg-[#3A3A3C] transition-colors"
            href="#"
          >
            <SettingsIcon className="h-5 w-5" />
            <span className="hidden md:block">Settings</span>
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default NotesNav;
