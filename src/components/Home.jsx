import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import News from './News'
import Youtube from './Youtube'
import LunarExploration from './LunarExploration'
import Explore from './Explore'
import InformationCenter from './InformationCenter'
import MoreTopic from './MoreTopic'
import Footer from './Footer'

const Home = () => {
  return (
    <div >
      <nav>
        <Navbar/>
      </nav>
      <main>
        <section className="hero">
            <Hero/>
        </section>
        <section className='container m-auto'>
            <News/>
        </section>
        <section>
            <Youtube/>
        </section>
        <section className='container m-auto'>
            <LunarExploration/>
        </section>
        <section>
          <Explore/>
        </section>
        <section className='container m-auto'>
          <InformationCenter/>
        </section>
        <section>
          <MoreTopic/>
        </section>
        <footer>
          <Footer/>
        </footer>
      </main>
    </div>
  )
}

export default Home
