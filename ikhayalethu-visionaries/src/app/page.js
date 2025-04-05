import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
        style={{
          backgroundImage: "url('https://i.postimg.cc/W1tF9j23/Whats-App-Image-2025-04-03-at-21-16-19-f20db238.jpg')",
          backgroundSize: "cover", // Ensures the image covers the entire area
          backgroundPosition: "center", // Centers the image
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen text-white">
        <Navbar />
        <main className="flex flex-col items-center text-center px-4 sm:px-8">
          <h1 className="text-4xl sm:text-6xl font-bold mb-8">
            THE FUTURE IS IN OUR HANDS
          </h1>
          <section className="text-lg sm:text-xl space-y-6 max-w-3xl">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Vision</h2>
              <p>
                A world where young people have opportunities to create sustainable
                livelihoods.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Mission</h2>
              <p>
                We use cutting-edge educational approaches to create pathways for
                young people from under-resourced communities to pull themselves
                and each other into sustainable livelihoods.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
