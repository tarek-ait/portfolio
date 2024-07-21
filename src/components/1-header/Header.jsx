import "./header.css";
import { useState } from "react";
const Header = () => {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header className="flex">
      <button className="menu" onClick={handleShowModal}>Show model</button>
      <div/> 
      <nav>
        <ul className="flex">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Speaking</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <button>light</button>

       {showModal && (
          <div className="fixed">
            <div>
              <ul className="modal"> 
                <li>
                  <button onClick={handleShowModal} className=".icon-cross"></button>
                </li>
                <li><a href="#">About</a></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Speaking</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
        </div>
       )}
      
    </header>
  );
};

export default Header;
