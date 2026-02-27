import bgImage from '../assets/bg_image.png'
import ReactGA from 'react-ga4';

export default function Hero({ scrollToSection }) {
  const handleFiverrClick = () => {
    ReactGA.event({
      category: 'Conversion',
      action: 'Click Fiverr Button',
      label: 'Hero Section'
    });
  };
  return (
    <header 
      className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url(${bgImage})` 
    }}
    >
      <div className="z-10 px-6">
        <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tighter">
          Roshni Trivedi
        </h1>
        <p className="text-xl md:text-3xl text-blue-200 mb-10 font-light">
          Transforming Complex Data into <span className="font-bold text-white">Actionable Growth</span>
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
          {/* CTA on the Left */}
          <a 
            href="https://www.fiverr.com/roshni_trivedi" 
            target="_blank" 
            onClick={handleFiverrClick}
            rel="noopener noreferrer"
            className="bg-[#1dbf73] hover:bg-[#19a463] text-white px-10 py-4 rounded-full font-bold shadow-xl transition-all hover:scale-105 flex items-center gap-2"
          >
            <span>💼</span> Hire Me on Fiverr
          </a>

          {/* View My Work on the Right */}
          <button 
            onClick={() => scrollToSection('case-studies')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold shadow-lg transition-all hover:scale-105"
          >
            View My Work
          </button>
        </div>
      </div>
    </header>
  );
}