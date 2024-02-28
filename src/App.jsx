import {BrowserRouter} from "react-router-dom";
import { About, Contact, Works, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech} from "./components"
const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-norepear bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-o">
           <Contact />
           <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
