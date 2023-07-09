import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import EceDesc from "./components/EceDesc";
import Equipments from "./components/Equipments";
import Projects from "./components/Projects";
import Facilities from "./components/Facilities";
import FeedbackForm from "./components/FeedbackForm";
import Courses from "./components/Courses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EceIntro from "./components/EceIntro";
import ProjectPage from "./components/ProjectsPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
      <FeedbackForm />
    </Router>
  );
}

export default App;
