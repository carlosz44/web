import Image from "next/image";
import aboutImage from "@public/images/das-katze-square.jpeg";

export default function About() {
  return (
    <div className="flex flex-col space-y-6 md:container">
      <h2>About me.</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2 pb-6 text-justify sm:col-span-1">
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
        <div className="col-span-2 place-self-center sm:col-span-1 sm:place-self-end">
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
