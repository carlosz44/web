import Image from "next/image";
import aboutImage from "@public/images/das-katze-square.jpeg";

export default function About() {
  return (
    <div className="flex flex-col space-y-6 md:container">
      <h2>About me.</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2 pb-6 text-justify sm:col-span-1">
          <p>
            Software engineer with 8 years of experience, specializing in
            full-stack development with JavaScript, TypeScript, Node.js, and
            PHP. Currently focused on AI integration — building intelligent
            chatbots and agent-based systems using LangChain, LangGraph, and
            LLM APIs.
          </p>
          <p>
            Experienced across e-commerce, fintech, streaming services, and the
            startup ecosystem. In 2017, co-founded a startup selected for the
            first Rockstart Latin America acceleration program.
          </p>
          <p>
            Cat person, already mastered the techniques for coding with cats
            around. At weekends I become a Zandalari Troll in World of Warcraft.
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
