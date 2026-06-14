import React, { useEffect } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Project from './Components/Project';
import Experience from './Components/Experience';
import Skillset from './Components/Skillset';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import CustomCursor from './Components/CustomCursor';
import ScrollJourney from './Components/ScrollJourney';
import './App.css';

function App() {
  // Reveal on scroll logic
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Initial check
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <div className="min-h-screen bg-primary selection:bg-accent/30 selection:text-white">
      <div className="mesh-bg" />
      <CustomCursor />
      <ScrollJourney />
      <Header />
      <main>
        <section className="reveal"><Hero /></section>
        <section className="reveal"><About /></section>
        <section className="reveal"><Project /></section>
        <section className="reveal"><Experience /></section>
        <section className="reveal"><Skillset /></section>
        <section className="reveal"><Resume /></section>
        <section className="reveal"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
