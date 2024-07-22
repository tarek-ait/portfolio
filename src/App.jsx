import { useEffect, useState } from 'react'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contactUs/ContactUs'
import Footer from './components/5-footer/Footer'

function App() {
  
  const [ showScroll , setShowScroll ] =useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const height = window.scrollY; 
       if (height > 300){
        setShowScroll(true);
       }else{
        setShowScroll(false);
       }
    }) // i will be the dev instructor at the gdg club 
},[])
  return (
    <div id="up" className='container'>
      <Header ></Header>
      <Hero></Hero>
      <div className="divider" />
      <Main></Main>
      <div className="divider" />
      <Contact></Contact>
      <div className="divider" />
      <Footer></Footer>

      
        <button style={{opacity:showScroll? 1 : 0}} className='scroll-back' onClick={() => {
          window.scrollTo({
            top:0,
            behavior:'smooth'
          })
        }}>
          <span className='icon-keyboard_arrow_up'></span>
        </button>
     
      
    
      
    </div>
  )
}

export default App
