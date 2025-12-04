import React, { useState } from "react";
import Preloader from "./components/Preloader";

function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <>
      {!loadingFinished && <Preloader onFinish={() => setLoadingFinished(true)} />}
      
      {loadingFinished && (
        <div className="min-h-screen bg-ivory">
          {/* Your main site content goes here */}
          <h1 className="text-4xl text-primary text-center pt-20">You're Welcome to T&S Events</h1>
        </div>
      )}
    </>
  );
}

export default App;
