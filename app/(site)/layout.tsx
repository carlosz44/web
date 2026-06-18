import Header from "@/components/header";
import Footer from "@/components/footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-auto px-4 py-6 md:p-4">
        {children}
      </main>
      <Footer />
    </>
  );
}
