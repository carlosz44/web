import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

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
