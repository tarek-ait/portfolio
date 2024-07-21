import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contactUs/ContactUs'
import Footer from './components/5-footer/Footer'

function App() {
  

  return (
    <div className='container'>
      <Header></Header>
      <Hero></Hero>
      <div className="divider" />
      <Main></Main>
      <div className="divider" />
      <Contact></Contact>
      <div className="divider" />
      <Footer></Footer>
    </div>
  )
}

export default App
