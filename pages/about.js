import Image from "next/image";
import aboutImage from "@public/images/das-katze-square.jpeg";

export default function About() {
  return (
    <div className="flex flex-col md:container space-y-6">
      <h2>About me.</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="pb-6 col-span-2 sm:col-span-1 text-justify">
          <p>
            Full stack developer with background in areas such as: fintech,
            e-commerce and startups.
          </p>
          <p>
            From 2016 to 2018 I co-funded a startup and we were part of the 2017
            Rockstart Acceleration Program in Colombia.
          </p>
          <p>
            Cat person, already mastered the techniques for coding with cats
            around. At weekends I become a Zandalari Troll in Word of Warcraft.
          </p>
        </div>
        <div className="col-span-2 sm:col-span-1 place-self-center sm:place-self-end">
          <Image
            src={aboutImage}
            alt="Picture of the author"
            placeholder="blur"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
