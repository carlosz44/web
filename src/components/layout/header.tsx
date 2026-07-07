"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../icons/logo";

const sections = [
  { route: "/work", icon: "Work" },
  { route: "/xp", icon: "Skills" },
  { route: "/projects", icon: "Projects" },
  { route: "/about", icon: "About" },
  { route: "/contact", icon: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="mx-auto flex flex-wrap items-center justify-between px-4 py-6 sm:px-6 md:container md:flex-nowrap">
        <div className="flex items-center">
          <Link href="/" aria-label="Logo">
            <Logo className="w-10" />
          </Link>
        </div>
        <ul className="flex">
          {sections.map((e) => {
            const isActive =
              pathname === e.route || pathname.startsWith(`${e.route}/`);
            return (
              <li className="mt-3 ml-3 sm:ml-6 md:mt-0" key={e.route}>
                <Link
                  href={e.route}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "text-violet-400"
                      : "transition-colors hover:text-violet-400"
                  }
                >
                  {e.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
