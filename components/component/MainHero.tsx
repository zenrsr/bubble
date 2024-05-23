"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu
} from "@/components/ui/dropdown-menu";

import { LockIcon, UserIcon } from "@/constants/iconsData";
import NotesNav from "./NotesNav";
import NotesHome from "./NotesHome";

export function MainHero() {
  return (
    <div className="flex h-screen w-full flex-col">
      {/* <header className="bg-gray-950 px-4 py-4 shadow-md  sm:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center gap-2 text-white" href="#">
            <LockIcon className="h-6 w-6" />
            <span className="text-xl font-bold">NoteLock</span>
          </Link>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="text-white" size="icon" variant="ghost">
                  <UserIcon className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="#">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="flex flex-1 flex-col md:flex-row">
        <NotesNav />
        <NotesHome />
      </div> */}
      <p>hello maa</p>
    </div>
  );
}
