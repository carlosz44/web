import type { Metadata } from "next";
import "@/styles/index.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Carlos Amorós - Full Stack Developer",
  description: "Carlos Amorós - Full stack developer",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col bg-stone-900 text-stone-50">
          <Header />
          <main className="container mx-auto flex flex-auto px-4 py-6 md:p-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
