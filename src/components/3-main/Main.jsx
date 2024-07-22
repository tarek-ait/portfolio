import React from "react";
import "./main.css";
import { myProjects } from "./project";
import { motion, AnimatePresence, addScaleCorrector } from "framer-motion";

const Main = () => {

  const [type, setType] = React.useState("all");


  // the schema of the projects is
  // the title, the sub title(discrpition), the category (react, vue , ...), image path ,the demoe link , the github link 


  // get your projects data 
  // modify the project displaying 
  // deploy with firebase 
  const [array, setArray] = React.useState(myProjects)
  return (
    <main className="flex">
      <div className="left">
        <button onClick={() => {
          setType("all");
          setArray(myProjects);
        }} className={type === "all" ? "active" : null}>All projects</button>
        <button onClick={() => {
          setType("htmlCss");
          setArray(myProjects.filter(item => item.category === "htmlCss"));
        }} className={type === "htmlCss" ? "active" : null}>HTML & css </button>
        <button onClick={() => {
          setType("javascript");
          setArray(myProjects.filter(item => item.category === "javascript"));
        }} className={type === "javascript" ? "active" : null}>JavaScript</button>
        <button onClick={() => {
          setType("react");
          setArray(myProjects.filter(item => item.category === "react"));
        }} className={type === "react" ? "active" : null}>React</button>
        <button onClick={() => {
          setType("vue");
          setArray(myProjects.filter(item => item.category === "vue"));
        }} className={type === "vue" ? "active" : null}>Vue.js</button>
        <button onClick={() => {
          setType("esi");
          setArray(myProjects.filter(item => item.category === "esi"));
        }} className={type === "esi" ? "active" : null}>Esi projects</button>
      </div>
      <motion.div layout className="right flex">

        {/* cart */}
        {array.map(item => {
          return (
            <AnimatePresence>
              <motion.article key={item.image} className="card"
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{type: "spring", damping: 10, stiffness:50}}
              >
                <img width={260} src="../../public/pfp.jpg" />
                <div className="box " style={{ width: "260px" }}>
                  <h2 className="title">{item.title}</h2>
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
              </motion.article>
            </AnimatePresence>
          )
        })}
      </motion.div>

    </main>
  );
};

export default Main;
