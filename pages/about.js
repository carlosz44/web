import Image from "next/image";
import aboutImage from "../public/images/das-katze-square.jpeg";

export default function About() {
  return (
    <div className="flex flex-col md:container space-y-6">
      <h2>About me.</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="px-4 pb-6 sm:px-0 col-span-2 sm:col-span-1 text-justify">
          <p>
            Full stack developer with background in different areas such as:
            finance, telecommunications and e-commerce. Currently I'm part of{" "}
            <a
              href="https://preauth.io"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {" "}
              Preauth.io
            </a>{" "}
            where we are building awesome things.
          </p>
          <p>
            From 2016 to 2018 I co-funded a startup and we were part of the 2017
            Rockstart Acceleration Program in Colombia.
          </p>
          <p>
            Cat person, already mastered the techniques for coding with cats
            around. In my free time I like to kill demons in Doom Eternal (add
            me to{" "}
            <a
              href="https://steamcommunity.com/id/carlos__z/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {" "}
              Steam
            </a>
            !).
          </p>
        </div>
        <div className="col-span-2 sm:col-span-1 place-self-center sm:place-self-end">
          <Image
            src={aboutImage}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
