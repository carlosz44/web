import GitHub from "./icons/footer/github";
import LinkedIn from "./icons/footer/linkedin";
import Twitter from "./icons/footer/twitter";
import Behance from "./icons/footer/behance";

export default function Footer() {
  const links = {
    github: "https://github.com/carlosz44",
    linkedin: "https://www.linkedin.com/in/carlos-amoros/",
    twitter: "https://twitter.com/carlos__z",
    behance: "https://www.behance.net/carlos__z",
  };

  return (
    <footer>
      <ul className="flex items-center justify-center space-x-4 lg:container px-4 py-6 mx-auto text-sm md:px-6">
        <li>
          <a
            href={links.github}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub className="h-7 md:h-8" />
          </a>
        </li>
        <li>
          <a
            href={links.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className="h-7 md:h-8" />
          </a>
        </li>
        <li>
          <a
            href={links.twitter}
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="h-7 md:h-8" />
          </a>
        </li>
        <li>
          <a
            href={links.behance}
            aria-label="Behance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Behance className="h-7 md:h-8" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
