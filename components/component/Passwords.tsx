import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Passwords() {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-8 sm:p-10 md:p-12 grid gap-8">
        <div className="text-center space-y-4 md:col-span-3">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Secure Password Storage
            </h1>
            <p className="text-gray-500 sm:text-lg md:text-xl">
              Protect your passwords with advanced encryption algorithms and
              customizable key lengths.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-20 sm:grid-cols-1 md:grid-cols-3">
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className="block text-gray-700 font-medium sm:text-lg md:text-xl"
                htmlFor="username"
              >
                Username
              </label>
              <Input
                className="w-full md:max-w-md"
                id="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="space-y-2">
              <label
                className="block text-gray-700 font-medium sm:text-lg md:text-xl"
                htmlFor="password"
              >
                Password
              </label>
              <Input
                className="w-full bg-black text-gray-300 md:max-w-md"
                id="password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
            <div className="space-y-2">
              <label
                className="block text-gray-700 font-medium sm:text-lg md:text-xl"
                htmlFor="website"
              >
                Website (optional)
              </label>
              <Input
                className="w-full bg-black text-gray-300"
                id="website"
                placeholder="Enter the website"
              />
            </div>
          </div>
          <div className="space-y-4 md:col-span-2">
            <div className="space-y-2">
              <label
                className="block text-gray-700 font-medium sm:text-lg md:text-xl"
                htmlFor="encryption-algorithm"
              >
                Encryption Algorithm
              </label>
              <div className="w-full" id="encryption-algorithm">
                <Select defaultValue="aes">
                  <SelectTrigger className="w-full text-gray-300">
                    <SelectValue placeholder="Select algorithm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aes">
                      AES (Advanced Encryption Standard)
                    </SelectItem>
                    <SelectItem value="blowfish">Blowfish</SelectItem>
                    <SelectItem value="twofish">Twofish</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <p className="text-gray-500 text-sm sm:text-base md:text-md">
                Choose the encryption algorithm to secure your passwords.
              </p>
            </div>
            <div className="space-y-2">
              <label
                className="block text-gray-700 font-medium sm:text-lg md:text-xl"
                htmlFor="key-length"
              >
                Key Length
              </label>
              <div className="w-full" id="key-length">
                <Select defaultValue="256">
                  <SelectTrigger className="w-full text-gray-300">
                    <SelectValue placeholder="Select key length" />
                  </SelectTrigger>
                  <SelectContent className="!bg-white">
                    <SelectItem value="128">128-bit</SelectItem>
                    <SelectItem value="256">256-bit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <p className="text-gray-500 text-sm sm:text-base md:text-md">
                Choose the encryption key length for stronger security.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-4 justify-end md:col-span-3">
          <Button className="w-full sm:w-auto flex items-end">
            Save Password
          </Button>
        </div>
      </div>
    </div>
  );
}
