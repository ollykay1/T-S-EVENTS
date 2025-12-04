import React, { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Slider from "./components/Slider";
import Contact from "./components/Contact";

function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <>
      {/* Preloader */}
      {!loadingFinished && <Preloader onFinish={() => setLoadingFinished(true)} />}

      {/* Main content */}
      {loadingFinished && (
        <div className="min-h-screen bg-ivory">
          <Navbar />

          <Hero />

          <Services />

          <Slider />

          <Contact />

          {/* Your welcome message */}
          <h1 className="text-4xl text-primary text-center pt-20">
            You're Welcome to T&S Events
          </h1>
        </div>
      )}
    </>
  );
}

export default App;
