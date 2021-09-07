export default function Contact() {
  const contact = {
    mail: "me@carlosamoros.com",
    calendly: "https://calendly.com/carlos_",
  };

  return (
    <div className="flex flex-col md:container space-y-6">
      <h2>Let's get in contact.</h2>
      <p>{contact.mail}</p>
      <p>
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
