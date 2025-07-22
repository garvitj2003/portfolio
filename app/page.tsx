import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      {/* Main Content Wrapper with responsive width */}
      <div className="w-[90%] lg:w-[80%] mx-auto">
        {/* Fixed Navigation */}
        <Navbar />

        <main>
          {/* Hero Section */}
          <Hero />

          {/* Portfolio Section */}
          <Portfolio />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
