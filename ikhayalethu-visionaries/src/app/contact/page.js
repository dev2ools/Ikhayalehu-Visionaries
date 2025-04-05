import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p className="mt-4">This is the Contact page content.</p>
      </main>
      <Footer />
    </div>
  );
}