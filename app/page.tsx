import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Collaborators from '../components/Collaborators'
import Work from '../components/Work'
// import AlignAI from '../components/AlignAI'  // hidden
import InspireWire from '../components/InspireWire'
import KristaTapes from '../components/KristaTapes'
import Press from '../components/Press'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Collaborators />
      <Work />
      {/* <AlignAI /> */}
      <InspireWire />
      <KristaTapes />
      <Press />
      <Contact />
      <Footer />
    </>
  )
}
