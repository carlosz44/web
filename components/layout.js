import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen text-gray-50 bg-gray-900">
      <Header />

      <main className="flex-auto flex px-4 py-6 mx-auto container md:p-4">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
