import "./App.css"
import Introduce from "./components/Introduce"
import Skills from "./components/Skills"
import WorkExperience from "./components/WorkExperience"
import Education from "./components/Education"
import Freelance from "./components/Freelance"
import Others from "./components/Others"

function App() {
  return (
    <div className="App">
      <div class="container">
        <Introduce />
        <Skills />
        <WorkExperience />
        <Education />
        <Freelance />
        <Others />
      </div>
    </div>
  )
}

export default App
