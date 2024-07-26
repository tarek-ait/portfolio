import "./header.css";
import { useEffect, useState } from "react";
const Header = () => {

  const [showModal, setShowModal] = useState(false);

  const [ theme , setTheme ] = useState(localStorage.getItem("currentMode") ?? "dark"); // we can use || 

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleTheme = () => {
    if (theme === "dark"){
      setTheme("light");
    }else{
      setTheme("dark")
    }
  }

  useEffect(() => {

    if (theme === "light"){
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }else{
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]) // runs once the theme is changed 
  return (
    <header className="flex">
      
      <button className="menu icon-menu flex" onClick={handleShowModal} ></button>
      <div/> 
      <nav>
        <ul className="flex">
          <li>
            <a href="#" onClick={() => {
                  window.scrollTo({
                    top:100,
                    behavior:'smooth'
                  })
                }}>About</a>
          </li>
          <li>
            <a href="#" onClick={() => {
                  window.scrollTo({
                    top:400,
                    behavior:'smooth'
                  })
                }}>Projects</a>
          </li>  
          <li>
            <a href="#" onClick={() => {
                  const height = window.innerHeight
                  console.log(height)
                  window.scrollTo({
                    
                  top:height*4,
                    behavior:'smooth'
                  })
                }}>Contact</a>
          </li>
        </ul>
      </nav>
      <button className="mode flex" onClick={() => {
        // sent the value to the local storage 
        localStorage.setItem("currentMode", theme ==="dark" ? "light" : "dark")
        // get the value from the local storage 
        setTheme(localStorage.getItem("currentMode"))
      }}>
        <span className={theme === "dark" ? "icon-moon-o" : "icon-sun"}></span>
      </button>

       {showModal && (
          <div className="fixed">
            <div>
              <ul className="modal"> 
                <li>
                  <button onClick={handleShowModal} className="icon-cross"></button>
                </li>
                <li><a href="#" onClick={() => {
                  window.scrollTo({
                    top:100,
                    behavior:'smooth'
                  })
                }}>About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
        </div>
       )}
      
    </header>
  );
};

export default Header;
