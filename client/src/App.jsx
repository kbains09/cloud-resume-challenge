import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Overview from './components/Overview/Overview';
import TechStack from './components/TechStack/TechStack';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Overview />
      <Contact />
      <Projects />
      <TechStack/>
      <Footer/>
    </div>
  );
}

export default App;
