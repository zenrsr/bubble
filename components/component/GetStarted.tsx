import { LockIcon } from "@/constants/iconsData";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const GetStarted = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-24 lg:py-32 mt-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 flex-wrap">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 ">
            Secure Your Notes and Passwords
          </h1>
          <p className="text-md md:text-lg lg:text-lg text-gray-600 flex-wrap">
            NoteLock is a powerful and user-friendly application that helps you
            store and manage your sensitive information securely.
          </p>
          <div className="flex gap-4">
            <Button>Get Started</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
        <div className="relative flex-wrap">
          <Image
            alt="NoteLock Hero"
            className="rounded-lg shadow-lg"
            height={400}
            src="https://img.freepik.com/free-vector/access-control-system-abstract-concept-vector-illustration-security-system-authorize-entry-login-credentials-electronic-access-password-passphrase-pin-verification-abstract-metaphor_335657-5746.jpg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover"
            }}
            width={600}
          />
          <div className="hidden lg:block absolute top-0 right-0 bg-gray-900 px-4 py-2 rounded-bl-lg text-gray-50">
            <LockIcon className="h-5 w-5 mr-2 inline" />
            Secure Notes
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
