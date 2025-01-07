import Navbar from './Components/Header/navBar';
import About from './Components/About/About';
import Internship from './Components/Internship/Internship';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import bg from './Assets/bg.mp4';
import './App.css'; // Ensure you include global styles
import Education from './Components/Education/Education';

function App() {
  return (
    <div className="App">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Navbar */}
      <Navbar />
      
      {/* About Section */}
      <div id="about" className="section">
        <About />
      </div>

      {/* Education Section */}
      <div id="education" className="section">
        <Education />
      </div>
      
      {/* Internship Section */}
      <div id="internship" className="section">
        <Internship />
      </div>
      
      {/* Skills Section */}
      <div id="skills" className="section">
        <Skills />
      </div>
      
      {/* Projects Section */}
      <div id="projects" className="section">
        <Projects />
      </div>
      
      {/* Contact Section */}
      <div id="contact" className="section">
        <Contact />
      </div>
    </div>
  );
}

export default App;
