import { BrowserRouter } from "react-router-dom";
import "./App.css";

import LeftSIdeBar from "./components/LeftSideBar/LeftSIdeBar";
import MainArea from "./components/MainArea/MainArea";
import RightSideBar from "./components/RightSideBar/RightSideBar";
import { AuthContextProvider } from "./context/AutheContext";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <BrowserRouter>
          {/* Background Blurs */}
          <div
            className="blur"
            style={{
              position: "absolute",
              left: "90px",
              top: "100px",
              opacity: ".3",
              backgroundColor: "purple",
            }}
          ></div>
          <div
            className="blur"
            style={{
              position: "absolute",
              right: "90px",
              top: "180px",
              opacity: ".3",
              backgroundColor: "blue",
            }}
          ></div>
          <LeftSIdeBar />
          <MainArea />
          <RightSideBar />
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;
