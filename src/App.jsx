import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
import { sendMsgToOpenAI } from "./openai";
import { useEffect, useRef, useState } from "react";

function App() {
  const msgEnd = useRef();
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([
    {
      text: "hey chatgpt, how are you?",
      isBot: true,
    },
  ]);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [message]);

  const handleSend = async () => {
    const text = input;
    setInput("");
    setMessage([...message, { text, isBot: false }]);
    const res = await sendMsgToOpenAI(input);
    setMessage([
      ...message,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
  };
  const handleEnter = async (e) => {
    if (e.key === "Enter") await handleSend();
  };

  const handleQuery = async (e) => {
    const text = e.target.value;
    setInput("");
    setMessage([...message, { text, isBot: false }]);
    const res = await sendMsgToOpenAI(input);
    setMessage([
      ...message,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
  };

  return (
    <>
      <div>
        <div className="app">
          <div className="sideBar">
            <div className="upperSide">
              <div className="upperSideTop">
                <img src={gptLogo} alt="Logo" className="logo" />
                <span className="brand">ChatGPT</span>
              </div>
              <button
                className="midBtn"
                onClick={() => {
                  window.location.reload();
                }}
              >
                <img src={addBtn} alt="New Chat" className="addBtn" />
                New Chat
              </button>

              <div className="upperSideBottom">
                <button
                  className="query"
                  onClick={handleQuery}
                  value={"What is React JS?"}
                >
                  <img src={msgIcon} alt="Query" />
                  What is React JS?
                </button>
                <button
                  className="query"
                  onClick={handleQuery}
                  value={"What is Next JS?"}
                >
                  <img src={msgIcon} alt="Query" />
                  What is Next JS?
                </button>
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
                Upgrade to Pro
              </div>
            </div>
          </div>

          <div className="main">
            <div className="chats">
              {message.map((message, i) => (
                <div key={i} className={message.isBot ? "chat bot" : "chat"}>
                  <img
                    className="chatImg"
                    src={message.isBot ? gptImgLogo : userIcon}
                    alt=""
                  />
                  <p className="txt">{message.text}</p>
                </div>
              ))}
              <div ref={msgEnd} />
            </div>

            <div className="chatFooter">
              <div className="inp">
                <input
                  type="text"
                  placeholder="Message ChatGPT"
                  value={input}
                  onKeyDown={handleEnter}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
                <button className="send">
                  <img src={sendBtn} alt="Send" onClick={handleSend} />
                </button>
              </div>
              <p>ChatGPT can make mistakes. Check important info.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
