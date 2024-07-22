import headerAnimation from '../../../public/animation/headerAnimation.json'
import './hero.css'
import Lottie from "lottie-react"
const Hero = () => {
  return (
    <section className='hero flex'>
      <div className="left">
         <div className="parent-avatar flex">
          <img src="../../public/pfp.jpg" />
          <div className='icon-verified'></div>
         </div>
         <h1 className='title'>Computer science student at Esi, Web developer and UI/UX designer</h1>
         <p className='subtitle'>Hloooo, i am tarek ait ahmed a seconde year student at the higher school of computer science algiers, an IT enthusiast, diving into anything that concerns web dev (front and back), fast and selflearner, my goal is to learn more about all the new tech used in web dev and i hope to get more familiar with ai in the future (interested in cinema and movies) </p>
         <div className="icons flex">
          <div className="icon icon-twitter">

          </div>
          <div className="icon icon-instagram">

          </div>
          <div className="icon icon-github">

          </div>
          <div className="icon icon-linkedin">

          </div>
         </div>
      </div>
      <div className="right animation">
      <Lottie className='animation' animationData={headerAnimation} loop={true}/>
      </div>
    </section>
  )
}

export default Hero
