"use client";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@/constants/iconsData";
import { useRouter } from "next/navigation";

export function Pricing() {
  const router = useRouter();
  const handleRoute = () => {
    router.push("/homepage");
  };

  return (
    <div
      className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 md:px-8"
      id="pricing"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 bg-white rounded-lg shadow-lg p-8 sm:p-10 md:p-12">
        <div className="col-span-1 md:col-span-3 space-y-4 text-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Notelock Pricing
            </h1>
            <p className="text-gray-500 sm:text-lg md:text-xl">
              Choose the plan that best fits your needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6 space-y-4 h-full">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Free</h2>
            <p className="text-gray-500 text-lg">For personal use</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-gray-900">$0</p>
            <p className="text-gray-500 text-lg">per month</p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-700 font-medium">Includes:</p>
            <ul className="space-y-1 text-gray-500 text-sm">
              <li>
                <CheckIcon className="w-4 h-4 inline-block mr-2" />
                Up to 5 passwords
              </li>
              <li>
                <CheckIcon className="w-4 h-4 inline-block mr-2" />
                Basic encryption
              </li>
              <li>
                <CheckIcon className="w-4 h-4 inline-block mr-2" />
                Limited device sync
              </li>
            </ul>
          </div>
          <Button className="w-full" onClick={handleRoute}>
            Get Started
          </Button>
        </div>
        <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6 space-y-4 h-full">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Individual</h2>
            <p className="text-gray-500 text-lg">
              For personal and small business use
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-gray-900">$5</p>
            <p className="text-gray-500 text-lg">per month</p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-700 font-medium">Includes:</p>
            <ul className="space-y-1 text-gray-500 text-sm">
              <li>
                <CheckIcon className="w-4 h-4 inline-block mr-2" />
                Unlimited passwords
              </li>
              <li>
                <CheckIcon className="w-4 h-4 inline-block mr-2" />
                Advanced encryption
              </li>
              <li>
                <CheckIcon className="w-4 h-4 inline-block mr-2" />
                Unlimited device sync
              </li>
            </ul>
          </div>
          <Button className="w-full" onClick={handleRoute}>
            Get Started
          </Button>
        </div>
        <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6 space-y-4 h-full">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Business</h2>
            <p className="text-gray-500 text-lg">For teams and enterprises</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-gray-900">$15</p>
            <p className="text-gray-500 text-lg">per user per month</p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-700 font-medium">Includes:</p>
            <ul className="space-y-1 text-gray-500 text-sm">
              <li>
                <CheckIcon className="w-4 h-4 inline-block mr-2" />
                Unlimited passwords
              </li>
              <li>
                <CheckIcon className="w-4 h-4 inline-block mr-2" />
                Enterprise-grade encryption
              </li>
              <li>
                <CheckIcon className="w-4 h-4 inline-block mr-2" />
                Unlimited device sync
              </li>
              <li>
                <CheckIcon className="w-4 h-4 inline-block mr-2" />
                Team management
              </li>
              <li>
                <CheckIcon className="w-4 h-4 inline-block mr-2" />
                Advanced reporting
              </li>
            </ul>
          </div>
          <Button className="w-full" onClick={handleRoute}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
