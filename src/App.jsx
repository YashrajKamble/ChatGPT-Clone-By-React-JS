import "./App.css";
import gptLogo from "./assets/chatgpt.svg";

function App() {
  return (
    <>
      <div>
        <div className="app">
          <div className="sideBar">
            <div className="upperSide">
              <div className="upperSideTop">
                <img src={gptLogo} alt="Logo" className="logo" />
                <span className="brand">ChatGPT</span>
                <div>
                  <button className="midBtn">
                    <img src="" alt="" className="addBtn" />
                    New Chat
                  </button>
                </div>
                
                <div className="upperSideBottom">
                  <button className="query">
                    <img src="" alt="" />
                    What is React JS?
                  </button>
                  <button className="query">
                    <img src="" alt="" />
                    What is Next JS?
                  </button>
                </div>
              </div>
            </div>

            <div className="lowerSide"></div>
          </div>

          <div className="main"></div>
        </div>
      </div>
    </>
  );
}

export default App;
