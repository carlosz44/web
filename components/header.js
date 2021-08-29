// import Image from "next/image";
import Link from "next/link";
import Logo from "./icons/logo";

export default function Header() {
  return (
    <header>
      <div className="flex flex-wrap items-center justify-between md:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
        {/* TODO: glass header */}
        <div className="flex items-center">
          <Link href="/">
            <a>
              <Logo className="w-10" />
            </a>
          </Link>
        </div>
        <ul className="flex">
          <li className="mt-3 md:mt-0 md:ml-6">
            <Link href="/xp">
              <a>XP</a>
            </Link>
          </li>
          <li className="mt-3 md:mt-0 md:ml-6">
            <Link href="/projects">
              <a>Proyectos</a>
            </Link>
          </li>
          <li className="mt-3 md:mt-0 md:ml-6">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="mt-3 md:mt-0 md:ml-6">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
