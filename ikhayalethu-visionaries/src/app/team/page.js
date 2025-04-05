import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Team() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-4xl font-extrabold text-center mb-8">Meet Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative">
            <div className="overflow-hidden rounded-lg shadow-lg h-115 w-full">
              <img
                src="https://i.postimg.cc/HsrM9KQd/person6.jpg"
                alt="Samkele Mbongisa"
                className="w-full h-full object-cover group-hover:hidden transition duration-500 ease-in-out"
              />
              <img
                src="https://i.postimg.cc/htx7HdyY/ghibi-p7.png"
                alt="Samkele Mbongisa Hover"
                className="w-full h-full object-cover hidden group-hover:block transition duration-500 ease-in-out"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">Samkele Mbongisa</h2>
              <p className="text-gray-500">Founder</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative">
            <div className="overflow-hidden rounded-lg shadow-lg h-115 w-full">
              <img
                src="https://i.postimg.cc/k4wSTP1X/person5.jpg"
                alt="Kwakhanya Mafu"
                className="w-full h-full object-cover group-hover:hidden transition duration-500 ease-in-out"
              />
              <img
                src="https://i.postimg.cc/5td803Q1/ghibi-p5.png"
                alt="Kwakhanya Mafu Hover"
                className="w-full h-full object-cover hidden group-hover:block transition duration-500 ease-in-out"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">Kwakhanya Mafu</h2>
              <p className="text-gray-500">Marketing & Public Relations Manager</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative">
            <div className="overflow-hidden rounded-lg shadow-lg h-115 w-full">
              <img
                src="https://i.postimg.cc/RVY7r9MW/person1.jpg"
                alt="Naledi Somtsewu"
                className="w-full h-full object-cover group-hover:hidden transition duration-500 ease-in-out"
              />
              <img
                src="https://i.postimg.cc/NM8DYndW/ghibi-p1.png"
                alt="Naledi Somtsewu Hover"
                className="w-full h-full object-cover hidden group-hover:block transition duration-500 ease-in-out"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">Naledi Somtsewu</h2>
              <p className="text-gray-500">Community Engagement Officer</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative">
            <div className="overflow-hidden rounded-lg shadow-lg h-115 w-full">
              <img
                src="https://i.postimg.cc/Zq8pyd6N/person3.jpg"
                alt="Axolile Ntshunga"
                className="w-full h-full object-cover group-hover:hidden transition duration-500 ease-in-out"
              />
              <img
                src="https://i.postimg.cc/m2kY6hGx/ghibi-p3.png"
                alt="Axolile Ntshunga Hover"
                className="w-full h-full object-cover hidden group-hover:block transition duration-500 ease-in-out"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">Axolile Ntshunga</h2>
              <p className="text-gray-500">Funding & Sponsorship Manager</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="group relative">
            <div className="overflow-hidden rounded-lg shadow-lg h-115 w-full">
              <img
                src="https://i.postimg.cc/Ssm8LxGv/person2.jpg"
                alt="Ngazo Mtila"
                className="w-full h-full object-cover group-hover:hidden transition duration-500 ease-in-out"
              />
              <img
                src="https://i.postimg.cc/NGJTTY2d/ghibi-p2.png"
                alt="Ngazo Mtila Hover"
                className="w-full h-full object-cover hidden group-hover:block transition duration-500 ease-in-out"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">Ngazo Mtila</h2>
              <p className="text-gray-500">Logistics & Operations Coordinator</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="group relative">
            <div className="overflow-hidden rounded-lg shadow-lg h-115 w-full">
              <img
                src="https://i.postimg.cc/KjzMVpw7/person4.jpg"
                alt="Asiphe Ndimlana"
                className="w-full h-full object-cover group-hover:hidden transition duration-500 ease-in-out"
              />
              <img
                src="https://i.postimg.cc/RFm1PRvG/ghibi-p4.jpg"
                alt="Asiphe Ndimlana Hover"
                className="w-full h-full object-cover hidden group-hover:block transition duration-500 ease-in-out"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">Asiphe Ndimlana</h2>
              <p className="text-gray-500">IT & Website Manager</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}