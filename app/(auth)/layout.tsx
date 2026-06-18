import Link from "next/link";
import Logo from "@/components/icons/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <div className="mx-auto flex items-center px-4 py-6 sm:px-6 md:container">
          <Link href="/" aria-label="Home">
            <Logo className="w-10" />
          </Link>
        </div>
      </header>
      <main className="container mx-auto flex flex-auto px-4 py-6 md:p-4">
        {children}
      </main>
    </>
  );
}
