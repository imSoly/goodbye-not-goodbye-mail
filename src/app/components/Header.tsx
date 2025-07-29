import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-border">
      <div className="flex items-center gap-4">
        <Link href="/">
          <h1 className="text-2xl font-bold">Style Gallery</h1>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/style/flat">Flat</Link>
          <Link href="/style/glassmorphism">Glassmorphism</Link>
          <Link href="/style/neumorphism">Neumorphism</Link>
          <Link href="/style/claymorphism">Claymorphism</Link>
        </nav>
      </div>
      <ThemeToggle />
    </header>
  );
}
