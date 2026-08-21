import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Trust from "./sections/Trust";
import HowItWorks from "./sections/HowItWorks";
import Safety from "./sections/Safety";
import Parents from "./sections/Parents";
import Drivers from "./sections/Drivers";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main>
        <Hero />
        <Trust />
        <HowItWorks />
        <Safety />
        <Parents />
        <Drivers />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;