import { DollarSignIcon } from "@/constants/iconsData";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Price = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <Image
            alt="NoteLock Pricing"
            className="rounded-lg shadow-lg"
            height={400}
            src="https://img.freepik.com/free-vector/hand-drawn-hand-holding-money-drawing-illustration_23-2151001116.jpg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover"
            }}
            width={600}
          />
          <div className="absolute top-0 left-0 bg-gray-900 px-4 py-2 rounded-br-lg text-gray-50">
            <DollarSignIcon className="h-5 w-5 mr-2 inline" />
            Affordable Pricing
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 ">
            Affordable Pricing for Everyone
          </h2>
          <p className="text-lg text-gray-600 ">
            NoteLock offers flexible pricing plans to fit your needs, whether
            you&apos;re an individual or a small business. Start securing your
            sensitive information today.
          </p>
          <div className="flex gap-4">
            <Button>View Pricing</Button>
            <Button variant="secondary">Contact Sales</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
