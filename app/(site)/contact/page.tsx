export default function Contact() {
  const contact = {
    mail: "me@carlosamoros.com",
    calendly: "https://calendly.com/carlos_",
  };

  return (
    <div className="flex flex-col space-y-6 md:container">
      <h2 className="animate-fade-up">Let{"'"}s get in contact.</h2>
      <p className="animate-fade-up [animation-delay:80ms]">{contact.mail}</p>
      <p className="animate-fade-up [animation-delay:160ms]">
        Also we can talk about anything:{" "}
        <a
          href={contact.calendly}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          book a meeting
        </a>
      </p>
    </div>
  );
}
