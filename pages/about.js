import Image from "next/image";
import aboutImage from "../public/images/das-katze-square.jpeg";

export default function About() {
  return (
    <div className="flex flex-col md:container space-y-6">
      <h2>Acerca de mi.</h2>
      <div className="grid grid-cols-2 gap-6 place-content-around">
        <div className="px-4 pb-6 sm:px-0 col-span-2 sm:col-span-1 text-justify">
          <p>
            Soy un desarrollador full stack con experiencia en distintas áreas:
            banca, telecomunicaciones y en e-commerce. Actualmente soy parte de{" "}
            <a
              href="https://preauth.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preauth.io
            </a>
          </p>
          {/* TODO: intereses y otras cosas */}
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
