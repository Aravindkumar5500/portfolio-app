
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';

import Project from './Components/Project';
import Resume from './Components/Resume';
import Skillset from './Components/Skillset';

function App() {
  return (
    <>
   <Header></Header>
   <Hero></Hero>
   <About></About>
   <Project></Project>
    <Skillset></Skillset>
   <Resume></Resume>
   <Contact></Contact>
  
   <Footer></Footer>
   
   
    </>
  );
}

export default App;
