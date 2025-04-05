import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Media() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Media Us</h1>
        <p className="mt-4">This is the Media page content.</p>
      </main>
      <Footer />
    </div>
  );
}