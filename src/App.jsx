import React, { useState } from "react";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Service";
import Gallery from "./components/Gallery";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <>
      {!loadingFinished && <Preloader onFinish={() => setLoadingFinished(true)} />}

      {loadingFinished && (
        <div className="min-h-screen bg-ivory">
          <Header />
          <Hero />
          <Services />
          <Gallery />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
