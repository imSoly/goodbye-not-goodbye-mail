import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import HamburgerIcon from "./icons/HamburgerIcon";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-2">
      <div className="flex items-center">
        <div
          className={clsx(
            "w-12 h-12 flex items-center justify-center mx-1",
            "hover:bg-background-hover rounded-full",
            "cursor-pointer"
          )}
        >
          <HamburgerIcon />
        </div>
        <Link href="/mail">
          <h1 className="text-2xl font-bold">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={109}
              height={40}
              priority
            />
          </h1>
        </Link>
      </div>
      <ThemeToggle />
    </header>
  );
}
