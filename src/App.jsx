import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Grid from './components/Grid'

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
      <Grid/>
    </div>
  )
}

export default App
