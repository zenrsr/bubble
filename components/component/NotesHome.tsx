import { ArrowRightIcon, FileTextIcon, KeyIcon } from "@/constants/iconsData";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "../ui/card";

const NotesHome = () => {
  return (
    <div className="flex-1 p-6 md:p-8 lg:p-10 overflow-y-auto h-screen">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
          Welcome to NoteLock
        </h1>
        <p className="mb-8 text-gray-500 md:text-lg lg:text-xl">
          NoteLock is a secure note and password manager that helps you organize
          and protect your sensitive information. Store your notes and passwords
          safely, and access them from any device.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Notes</CardTitle>
              <CardDescription>
                View and manage your saved notes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Link
                  className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-3 transition-colors hover:bg-gray-200"
                  href="#"
                >
                  <div className="flex items-center gap-3">
                    <FileTextIcon className="h-6 w-6 text-gray-500" />
                    <div>
                      <h3 className="font-semibold text-black">
                        Shopping List
                      </h3>
                      <p className="text-sm text-gray-500">
                        Last updated 2 days ago
                      </p>
                    </div>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-gray-500" />
                </Link>
                <Link
                  className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-3 transition-colors hover:bg-gray-200"
                  href="#"
                >
                  <div className="flex items-center gap-3">
                    <FileTextIcon className="h-6 w-6 text-gray-500" />
                    <div>
                      <h3 className="font-semibold text-black">
                        Meeting Notes
                      </h3>
                      <p className="text-sm text-gray-500">
                        Last updated 1 week ago
                      </p>
                    </div>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-gray-500" />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Your Passwords</CardTitle>
              <CardDescription>
                View and manage your saved passwords.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Link
                  className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-3 transition-colors hover:bg-gray-200"
                  href="#"
                >
                  <div className="flex items-center gap-3">
                    <KeyIcon className="h-6 w-6 text-gray-500" />
                    <div>
                      <h3 className="font-semibold text-black">Gmail</h3>
                      <p className="text-sm text-gray-500">
                        Last updated 3 months ago
                      </p>
                    </div>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-gray-500" />
                </Link>
                <Link
                  className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-3 transition-colors hover:bg-gray-200"
                  href="#"
                >
                  <div className="flex items-center gap-3">
                    <KeyIcon className="h-6 w-6 text-gray-500" />
                    <div>
                      <h3 className="font-semibold text-black">Bank Account</h3>
                      <p className="text-sm text-gray-500">
                        Last updated 6 months ago
                      </p>
                    </div>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-gray-500" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NotesHome;
