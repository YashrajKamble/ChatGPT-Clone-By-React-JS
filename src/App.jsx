import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";

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
                    <img src={addBtn} alt="New Chat" className="addBtn" />
                    New Chat
                  </button>
                </div>

                <div className="upperSideBottom">
                  <button className="query">
                    <img src={msgIcon} alt="Query" />
                    What is React JS?
                  </button>
                  <button className="query">
                    <img src={msgIcon} alt="Query" />
                    What is Next JS?
                  </button>
                </div>
              </div>
            </div>

            <div className="lowerSide">
              <div className="listItems">
                <img src={home} alt="Home" className="listItemsImg" />
                Home
              </div>

              <div className="listItems">
                <img src={saved} alt="Saved" className="listItemsImg" />
                Saved
              </div>

              <div className="listItems">
                <img src={rocket} alt="Upgrade" className="listItemsImg" />
                Upgrade
              </div>
            </div>
          </div>

          <div className="main"></div>
        </div>
      </div>
    </>
  );
}

export default App;
