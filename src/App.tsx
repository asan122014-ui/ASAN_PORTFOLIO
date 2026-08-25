import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import Safety from "./sections/Safety";
import HowItWorks from "./sections/HowItWorks";
import Team from "./sections/Team";
import Parents from "./sections/Parents";
import Drivers from "./sections/Drivers";
import FAQ from "./sections/FAQ";

import FindDriver from "./FindDriver";
import JoinDriver from "./JoinDriver";
import GetStarted from "./GetStarted";

import Footer from "./components/Footer";

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  // Parent lead generation page
  if (path === "/find-driver") {
    return <FindDriver />;
  }

  // Driver lead generation page
  if (path === "/join-driver") {
    return <JoinDriver />;
  }

  if (path === "/get-started") {
    return <GetStarted />;
  }

  // Main website
  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#000000]">

      <Navbar />

      <main>

        {/* 1. Hero */}
        <Hero />

        {/* 2. How It Works */}
        <HowItWorks />

        {/* 3. Safety */}
        <Safety />

        {/* 4. For Parents */}
        <Parents />

        {/* 5. For Drivers */}
        <Drivers />

        {/* 6. Our Team */}
        <Team />

        {/* 7. Frequently Asked Questions */}
        <FAQ />

      </main>

      <Footer />

    </div>
  );
}

export default App;
