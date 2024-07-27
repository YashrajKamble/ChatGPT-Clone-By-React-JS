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
              </div>
              <button className="midBtn">
                <img src={addBtn} alt="New Chat" className="addBtn" />
                New Chat
              </button>

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
              <div className="chat">
                <img className="chatImg" src={userIcon} alt="" />
                <p className="txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem cum, natus quasi eius excepturi repellendus!
                  Laborum, possimus velit corrupti est natus, eligendi vel quam Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, iusto explicabo reiciendis nemo eum incidunt maiores cupiditate delectus eligendi provident iure eos et hic aliquid, ut ipsum architecto voluptatem recusandae, repellendus aperiam! Molestias, aliquid. Odit, iste doloremque numquam ipsa cupiditate amet possimus, nostrum, voluptate cum velit accusantium beatae? Veritatis ratione harum iure perferendis aliquid hic. Magnam aperiam doloremque veritatis voluptatibus odit vel molestiae iusto odio sapiente id sequi dignissimos porro atque nisi perferendis, vero natus voluptatem tenetur laudantium quas rerum veniam assumenda? Cumque, saepe quae autem molestias aliquid omnis, sint eum repellendus accusamus incidunt repellat dolore! Totam sequi quae, vel, hic at voluptatibus inventore dicta voluptate sit quibusdam, omnis itaque fuga?
                </p>
              </div>
              <div className="chat bot">
                <img className="chatImg" src={gptImgLogo} alt="" />
                <p className="txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem cum, natus quasi eius excepturi repellendus!
                  Laborum, possimus velit corrupti est natus, eligendi vel quam
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam ex aliquid, in adipisci laborum voluptatum a cum
                  dolorum ipsam illum reiciendis atque similique optio magnam,
                  obcaecati sed commodi praesentium autem ut incidunt! Aut,
                  tenetur sunt hic omnis quos quis tempora molestias vero
                  pariatur. Voluptatum esse possimus reiciendis sint aliquam ex
                  doloribus dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nemo ipsum, ad quibusdam qui cum nulla excepturi tempora sit nesciunt eius assumenda molestiae, officia corrupti a quis in ratione? Sint non possimus, placeat nisi nesciunt consequuntur velit neque a! Dolorem adipisci nulla porro ipsa dicta autem exercitationem sequi reprehenderit. Soluta omnis explicabo perferendis blanditiis. Necessitatibus repudiandae vero exercitationem accusamus reiciendis qui inventore, magni rerum possimus, magnam illo eligendi cum, deserunt odio nulla. Quasi ad optio assumenda earum, magnam laudantium eos exercitationem iure, harum dolorem fuga, alias eaque! Vitae, tempora distinctio officiis quos nobis exercitationem voluptates debitis sequi, nesciunt, quam ratione. Culpa, deserunt? Consequatur praesentium voluptatibus dolore facere necessitatibus obcaecati nisi omnis?
                </p>
              </div>
            </div>

            <div className="chatFooter">
              <div className="inp">
                <input type="text" placeholder="Message ChatGPT" />
                <button className="send">
                  <img src={sendBtn} alt="Send" />
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
