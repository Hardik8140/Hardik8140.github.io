import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Works from "./Components/Works";
import Statistics from "./Components/Statistics";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skill />
        <Project />
        <Works />
        <Statistics />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
