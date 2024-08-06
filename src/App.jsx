import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Grid from './components/Grid'
import Comp from './components/Comp'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div>
      <img
        src="/bg-line.svg"
        alt="Background line"
        className="absolute -right-28 top-0 z-[-999]"
      />
      <Navbar />
      <Hero />
      <Grid />
      <Comp />
      <Testimonials />
    </div>
  )
}

export default App
