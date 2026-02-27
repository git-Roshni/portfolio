import { useState } from 'react';
import Hero from './Hero';
import CaseStudies from './CaseStudies';
import ConsultingServices from './ConsultingServices';
import Expertise from './Expertise';
import Process from './Process';
import Industries from './Industries';
import Dashboard from './dashboard';
import Navbar from '../components/Navbar';


export default function Home(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); 
    }
  };
    return(
        <div className="min-h-screen bg-slate-900 text-white font-sans">
         <Navbar 
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen} 
            scrollToSection={scrollToSection} 
        />
          <main className="bg-slate-900">
            <Hero scrollToSection={scrollToSection} />
            <CaseStudies id="case-studies"/>
            <ConsultingServices id="consulting-services"/>
            <Expertise id="expertise"/>
            <Process id="process"/>
            <Industries id="industries"/>
            <Dashboard id="dashboard"/>
        </main>
        </div>
    )
}