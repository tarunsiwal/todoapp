import "./App.css";
import React, { useState, useEffect } from "react";
import Spinner from "./components/helper/spinner.js";
import Sidenav from "./components/sidenav";
import MainObjectContainer from "./components/ui/mainObjectContainer.js";
import PoupContainer from "./components/ui/poupContainer.js";
import "./assets/css/popup.css";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // const [activeView, setActiveView] = useState("inbox");
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isSidenavCollapsed, setIsSidenavCollapsed] = useState(false);
  // const toggleSidenav = () => {
  //   setIsSidenavCollapsed((prev) => !prev);
  // };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="app-container">
          <PoupContainer trigger={false} />
          <Sidenav user={"tarun"} userimg={""} />
          {/* <Sidenav
            setActiveView={setActiveView}
            setIsModalOpen={setIsModalOpen}
            isCollapsed={isSidenavCollapsed}
            
          /> */}
          <MainObjectContainer />
        </div>
      )}
    </div>
  );
}

export default App;
