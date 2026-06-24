import type { Metadata } from "next";
import "@/styles/index.css";

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
        <div className="flex min-h-dvh flex-col bg-stone-900 text-stone-50">
          {children}
        </div>
      </body>
    </html>
  );
}
