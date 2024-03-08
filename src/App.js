import "./styles/styles.css";
import { HashRouter as Router,
  Route,Routes
} from 'react-router-dom';


import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Contacts from "./pages/Contacts";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import Home from "./pages/Home";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<ProjectPage />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <Footer/>
      </Router>
  </div>
  );
}

export default App;
