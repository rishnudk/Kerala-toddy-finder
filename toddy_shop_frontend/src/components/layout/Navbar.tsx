"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "text-primary-container font-bold border-b-2 border-primary-container pb-1 font-[family-name:var(--font-heading)]";
    }
    return "text-stone-600 font-medium hover:text-primary-container transition-all duration-300 font-[family-name:var(--font-heading)]";
  };

  return (
    <header className="bg-cream border-b border-cream-border sticky top-0 z-50">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-primary-container font-[family-name:var(--font-heading)]"
        >
          Shaap
        </Link>
        <nav className="hidden md:flex items-center gap-x-8">
          <Link
            href="/"
            className={getLinkClasses("/")}
          >
            Discover
          </Link>
          <Link
            href="/explore"
            className={getLinkClasses("/explore")}
          >
            Explore
          </Link>
          <Link
            href="/community"
            className={getLinkClasses("/community")}
          >
            Community
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-stone-600 cursor-pointer">
            account_circle
          </span>
        </div>
      </div>
    </header>
  );
}
