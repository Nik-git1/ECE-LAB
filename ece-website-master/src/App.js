import "./App.css";
import Navbar from "./components/Navbar";
import FeedbackForm from "./components/FeedbackForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EceIntro from "./components/EceIntro";
import ProjectPage from "./components/ProjectsPage";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";
// import EceIntro from "./components/EceIntro"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      {isLoading ? (
       <EceIntro />
      ) : (
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
          </Routes>
          <FeedbackForm />
        </Router>
      )}
    </div>
  );
}
export default App;
