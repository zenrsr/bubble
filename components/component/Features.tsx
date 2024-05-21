import {
  CloudIcon,
  FingerprintIcon,
  FolderIcon,
  KeyIcon,
  ShieldIcon,
  SmartphoneIcon
} from "@/constants/iconsData";
import React from "react";

const Features = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          <FolderIcon className="h-8 w-8 text-gray-900 " />
          <h3 className="text-xl font-semibold text-gray-900 ">
            Organize Your Notes
          </h3>
          <p className="text-gray-600 ">
            Easily create, edit, and organize your notes into folders and
            categories for quick access.
          </p>
        </div>
        <div className="space-y-4">
          <KeyIcon className="h-8 w-8 text-gray-900 " />
          <h3 className="text-xl font-semibold text-gray-900 ">
            Secure Password Management
          </h3>
          <p className="text-gray-600 ">
            Store your passwords securely and generate strong, unique passwords
            for your accounts.
          </p>
        </div>
        <div className="space-y-4">
          <ShieldIcon className="h-8 w-8 text-gray-900 " />
          <h3 className="text-xl font-semibold text-gray-900 ">
            Robust Encryption
          </h3>
          <p className="text-gray-600 ">
            Your data is protected with industry-leading encryption techniques,
            ensuring your information remains secure.
          </p>
        </div>
        <div className="space-y-4">
          <SmartphoneIcon className="h-8 w-8 text-gray-900 " />
          <h3 className="text-xl font-semibold text-gray-900 ">
            Cross-Device Access
          </h3>
          <p className="text-gray-600 ">
            Access your notes and passwords from any device with an internet
            connection, ensuring your data is always at your fingertips.
          </p>
        </div>
        <div className="space-y-4">
          <CloudIcon className="h-8 w-8 text-gray-900 " />
          <h3 className="text-xl font-semibold text-gray-900 ">Cloud Backup</h3>
          <p className="text-gray-600 ">
            Your data is automatically backed up to the cloud, providing an
            additional layer of security and peace of mind.
          </p>
        </div>
        <div className="space-y-4">
          <FingerprintIcon className="h-8 w-8 text-gray-900 " />
          <h3 className="text-xl font-semibold text-gray-900 ">
            Biometric Authentication
          </h3>
          <p className="text-gray-600 ">
            Secure your account with biometric authentication, such as
            fingerprint or face recognition, for added convenience and security.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
