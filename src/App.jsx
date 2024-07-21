import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contactUs/ContactUs'
import Footer from './components/5-footer/Footer'

function App() {
  

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

      <a href="">
        <button className='scroll-back'>
          <span className='icon-keyboard_arrow_up'></span>
        </button>
      </a>
      
    </div>
  )
}

export default App
