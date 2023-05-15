import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Skills from './pages/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Projects from './components/projects/Projects';
import Contact from './pages/contact/Contact';
import ScrollUp from './components/scrollup/ScrollUp';


function App() {
  return (
    <>
    <Header/>
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Projects/>
      <Contact/>
    </main>
     <ScrollUp/>
    </>
  );
}

export default App;
