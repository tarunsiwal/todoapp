import "./App.css";
import React, { useState, useEffect } from "react";
import Spinner from "./components/helper/spinner.js";
import Sidenav from "./components/sidenav";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Sidenav user={"tarun"} userimg={""} />
        </div>
      )}
    </div>
  );
}

export default App;
