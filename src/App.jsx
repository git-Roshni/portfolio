import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Home from './Pages/Home';
import RetialStudy1 from './Pages/RetaialStudy1';

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    if (!window.location.hostname.includes("localhost")) {
        // Replace with your actual Measurement ID from Step 1
        ReactGA.initialize('G-24Q0H01YX1');
        
        // Send a pageview to indicate the site has loaded
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    } else {
       console.log("Analytics skipped: Running on localhost");
  }
  }, []);
  return (
      <>
      <Router>
      <AnalyticsTracker />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/retail" element={<RetialStudy1 />} />
      </Routes>
    </Router>
      <footer className="bg-slate-950 text-slate-400 py-12 px-10 border-t border-slate-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h4 className="text-white font-bold text-lg">Roshni Trivedi</h4>
            <p className="text-xs mt-1 italic">Turning Data into Strategy.</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg text-sm transition"
            >
              <span>↑</span> Back to Top
            </button>
            <div className="text-[10px] uppercase tracking-tighter">
              © {new Date().getFullYear()} Roshni Trivedi. All rights reserved.
            </div>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="https://www.fiverr.com/roshni_trivedi" target="_blank" className="hover:text-blue-400">Fiverr Profile</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App