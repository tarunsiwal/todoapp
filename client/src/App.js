import "./App.css";
import React, { useState, useEffect } from "react";
import Spinner from "./components/helper/spinner.js";
import Sidenav from "./components/sidenav";
import MainObjectContainer from "./components/ui/mainObjectContainer.js";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="app-container">
          <Sidenav user={"tarun"} userimg={""} />
          <MainObjectContainer />
        </div>
      )}
    </div>
  );
}

export default App;
