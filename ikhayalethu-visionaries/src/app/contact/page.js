import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://i.postimg.cc/HxJmhQ3c/contact-2.jpg')", // Replace with your desired background image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20">
        <Navbar />
        <main className="p-8">
          <h1 className="text-4xl font-extrabold text-center mb-8 text-white">
            CONTACT US
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            {/* Contact Form */}
            <div className="contact-form sm:w-1/2 p-4 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-4">
                Leave a Message
              </h2>
              <form
                className="flex flex-col gap-4"
                action="https://formspree.io/f/mzblbdga"
                method="POST"
              >
                <div className="group">
                  <input
                    type="text"
                    name="name"
                    placeholder=" "
                    className="w-full p-2 border border-gray-300 rounded bg-transparent text-white"
                    required
                  />
                  <label className="text-sm text-gray-400">Name</label>
                </div>
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    className="w-full p-2 border border-gray-300 rounded bg-transparent text-white"
                    required
                  />
                  <label className="text-sm text-gray-400">Email</label>
                </div>
                <div className="group">
                  <textarea
                    name="comment"
                    rows="5"
                    placeholder=" "
                    className="w-full p-2 border border-gray-300 rounded bg-transparent text-white"
                    required
                  ></textarea>
                  <label className="text-sm text-gray-400">Message</label>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Send!
                </button>
              </form>
            </div>

            {/* Contact Info and Social Links */}
            <div className="sm:w-1/2 p-4">
              <img
                src="https://i.postimg.cc/W1tF9j23/Whats-App-Image-2025-04-03-at-21-16-19-f20db238.jpg"
                alt="Contact Us"
                className="rounded-lg shadow-lg mb-4 w-3/4 mx-auto"
              />
              <h3 className="text-2xl font-bold text-center text-white mb-4">
                FOLLOW US:
              </h3>
              <div className="flex justify-center gap-4 text-white text-2xl">
                <a
                  href="https://www.facebook.com/profile.php?id=100089087082905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://twitter.com/ndim_asiphe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B8h9wTBRuSt2U75xVavKEoA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/Asiphe04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}