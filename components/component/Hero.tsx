import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  CloudIcon,
  DollarSignIcon,
  FingerprintIcon,
  FolderIcon,
  KeyIcon,
  LockIcon,
  ShieldIcon,
  SmartphoneIcon,
  UserIcon
} from "@/constants/iconsData";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Price from "./Price";
import Features from "./Features";
import GetStarted from "./GetStarted";

export function Hero() {
  return (
    <>
      <Header />
      <GetStarted />
      <Features />
      <Price />
      <About />
      <Footer />
    </>
  );
}
