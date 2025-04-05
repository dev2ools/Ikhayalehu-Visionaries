import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p className="mt-4">This is the About page content.</p>
      </main>
      <Footer />
    </div>
  );
}