import React from "react";
import "./main.css";
const Main = () => {
  return (
    <main className="flex">
      <div className="left">
        <button className="active">All projects</button>
        <button>HTML & css </button>
        <button>JavaScript</button>
        <button>React</button>
        <button>Vue.js</button>
        <button>Esi projects</button>
      </div>
      <div className="right flex">
        {/* cart */}
        {["aa","bb","cc","44"].map(item => {
          return (
            <article key={item} className="card">
              <img width={260} src="../../public/pfp.jpg" />
              <div className="box " style={{width: "260px"}}>
                <h2 className="title">Landing Page</h2>
                <p className="body">Lorem, ipsum dolor sit amet consectetur adipisicing Lorem, ipsum dolor..</p>
                <div className="flex icons">
                  <div className="first flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a href="#" className="link flex">
                    more 
                    <span className="icon-arrow-right2"></span>
                    </a>    
                </div>
              </div>
            </article>
          )
        })}
      </div>
     
    </main>
  );
};

export default Main;
