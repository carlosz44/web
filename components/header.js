import Link from "next/link";
import Logo from "./icons/logo";

export default function Header() {
  const sections = [
    {
      route: "/xp",
      icon: "XP",
    },
    {
      route: "/projects",
      icon: "Projects",
    },
    {
      route: "/about",
      icon: "About",
    },
    {
      route: "/contact",
      icon: "Contact",
    },
  ];

  return (
    <header>
      <div className="flex flex-wrap items-center justify-between md:container px-4 py-6 mx-auto md:flex-no-wrap sm:px-6">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <Logo className="w-10" />
            </a>
          </Link>
        </div>
        <ul className="flex">
          {sections.map((e) => (
            <li className="mt-3 md:mt-0 ml-3 sm:ml-6" key={e.route}>
              <Link href={e.route}>
                <a>{e.icon}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
