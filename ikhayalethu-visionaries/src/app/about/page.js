import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://i.postimg.cc/5yZJw6Vc/about3.png')",
          backgroundSize: "cover", // Ensures the image covers the entire area
          backgroundPosition: "center", // Centers the image
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen text-white">
        <Navbar />
        <main className="flex flex-col items-center text-center px-4 sm:px-8">
          {/* Organization Overview Section */}
          <section className="flex flex-col items-center justify-center gap-8 mt-12 max-w-5xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-8 text-white">
            ABOUT US
          </h1>
            <div className="text-left text-white space-y-6">
              <h2 className="text-2xl font-extrabold mb-4">1. Introduction</h2>
              <p className="text-lg font-bold">
                Ikhayalethu Visionaries is a youth-led, community-driven Non-Profit Organization (NPO) committed to empowering young people through leadership development, mental health advocacy, and skills training. Our goal is to create a generation of confident, skilled, and visionary youth who actively contribute to their communities and economic growth. Founded in 2024, Ikhayalethu Visionaries seeks to bridge the gap between education, self-development, and practical opportunities by equipping young people with essential life skills, knowledge, and resources to help them succeed in their personal and professional lives.
              </p>

              <h2 className="text-2xl font-extrabold mb-4">2. Our Mission & Vision</h2>
              <p className="text-lg font-bold">
                <strong>Mission Statement:</strong> To empower and inspire young individuals by providing them with knowledge, skills, and opportunities that foster personal growth, leadership, and economic independence.
              </p>
              <p className="text-lg font-bold">
                <strong>Vision Statement:</strong> To build a community of young leaders who are mentally resilient, socially responsible, and economically empowered to drive change in their communities.
              </p>

              <h2 className="text-2xl font-extrabold mb-4">3. Core Objectives</h2>
              <ul className="list-disc list-inside text-lg font-bold">
                <li>Youth Development – Equipping young people with leadership, communication, and problem-solving skills.</li>
                <li>Mental Health & Wellness – Promoting mental health awareness, self-care practices, and emotional resilience.</li>
                <li>Entrepreneurship & Career Readiness – Providing financial literacy, career guidance, and business development support.</li>
                <li>Community Engagement & Volunteering – Encouraging youth participation in social impact projects and initiatives.</li>
              </ul>
            </div>
          </section>

          {/* Our Story Section */}
          <section className="flex flex-col items-center justify-center gap-8 mt-12 max-w-5xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-white text-center">
              Our Story
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 w-full">
              {/* Image Div */}
              <div className="w-full sm:w-1/2">
                <img
                  src="https://i.postimg.cc/q7C8LFn9/about1.jpg"
                  alt="Our Story"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              {/* Text Div */}
              <div className="w-full sm:w-1/2 text-left text-white">
                <h2 className="text-3xl font-extrabold mb-4">Empowering Communities</h2>
                <p className="text-lg sm:text-xl font-bold leading-relaxed">
                  Ikhayalehu Visionaries was founded with the belief that young people
                  have the power to transform their communities. Through innovative
                  educational programs and a commitment to sustainability, we empower
                  individuals to create lasting change. Our journey began with a vision
                  to bridge the gap between potential and opportunity, and today, we
                  continue to inspire and uplift under-resourced communities.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}