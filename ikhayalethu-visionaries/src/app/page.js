import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://i.postimg.cc/sfK3ngVR/home2.jpg')",
          backgroundSize: "cover", // Ensures the image covers the entire area
          backgroundPosition: "center", // Centers the image
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen text-white">
        <Navbar />
        <main className="flex flex-col items-center text-center px-4 sm:px-8 mt-[-95px]">
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-white">
            <span className="text-blue-600 font-bold">IKHAYALETHU</span> VISIONARIES
          </h1>
          <section className="text-lg sm:text-xl space-y-6 max-w-3xl text-white font-bold">
            <div>
              <h2 className="text-2xl font-bold">
                TOGETHER WE MAKE A <span className="text-blue-600 font-bold">DIFFERENCE</span>
              </h2>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
