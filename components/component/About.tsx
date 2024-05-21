import {
  CloudIcon,
  DollarSignIcon,
  FingerprintIcon,
  LockIcon,
  SmartphoneIcon,
  UserIcon
} from "@/constants/iconsData";
import React from "react";

const About = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 ">
          Why Choose NoteLock?
        </h2>
        <p className="text-lg text-gray-600 ">
          NoteLock is the secure and reliable solution for managing your
          sensitive information.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-left space-y-4">
            <LockIcon className="h-8 w-8 text-gray-900 " />
            <h3 className="text-xl font-semibold text-gray-900 ">
              Military-Grade Encryption
            </h3>
            <p className="text-gray-600 ">
              Your data is protected with industry-leading encryption
              techniques, ensuring your information remains secure.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-left space-y-4">
            <CloudIcon className="h-8 w-8 text-gray-900 " />
            <h3 className="text-xl font-semibold text-gray-900 ">
              Secure Cloud Backup
            </h3>
            <p className="text-gray-600 ">
              Your data is automatically backed up to the cloud, providing an
              additional layer of security and peace of mind.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-left space-y-4">
            <SmartphoneIcon className="h-8 w-8 text-gray-900 " />
            <h3 className="text-xl font-semibold text-gray-900 ">
              Cross-Device Accessibility
            </h3>
            <p className="text-gray-600 ">
              Access your notes and passwords from any device with an internet
              connection, ensuring your data is always at your fingertips.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-left space-y-4">
            <FingerprintIcon className="h-8 w-8 text-gray-900 " />
            <h3 className="text-xl font-semibold text-gray-900 ">
              Biometric Authentication
            </h3>
            <p className="text-gray-600 ">
              Secure your account with biometric authentication, such as
              fingerprint or face recognition, for added convenience and
              security.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-left space-y-4">
            <UserIcon className="h-8 w-8 text-gray-900 " />
            <h3 className="text-xl font-semibold text-gray-900 ">
              User-Friendly Interface
            </h3>
            <p className="text-gray-600 ">
              NoteLock&apos;s intuitive and modern interface makes it easy to
              manage your notes and passwords, even for non-technical users.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-left space-y-4">
            <DollarSignIcon className="h-8 w-8 text-gray-900 " />
            <h3 className="text-xl font-semibold text-gray-900 ">
              Affordable Pricing
            </h3>
            <p className="text-gray-600 ">
              NoteLock offers flexible pricing plans to fit your needs, whether
              you&apos;re an individual or a small business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
