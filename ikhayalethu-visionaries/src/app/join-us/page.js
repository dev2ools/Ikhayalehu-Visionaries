import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function join() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Join Us</h1>
        <p className="mt-4">This is the Join page content.</p>
      </main>
      <Footer />
    </div>
  );
}