// src/components/Navbar.jsx
export default function Navbar({ isMenuOpen, setIsMenuOpen, scrollToSection }) {
  return (
    <>
      {/* --- BURGER BUTTON --- */}
      <nav className="fixed top-6 left-6 z-[100]">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90"
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </nav>

      {/* --- DARK OVERLAY --- */}
      <div 
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      ></div>

      {/* --- SIDE MENU PANEL --- */}
      <aside 
        className={`fixed top-0 left-0 h-full w-72 md:w-80 bg-slate-950 z-[90] shadow-2xl transform transition-transform duration-300 ease-in-out border-r border-slate-800 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-10 pt-24 space-y-6 text-lg font-medium">
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">Navigation</p>
          
          
          <button onClick={() => scrollToSection('case-studies')} className="text-left hover:text-blue-500 transition">Case Studies</button>
          <button onClick={() => scrollToSection('industries')} className="text-left hover:text-blue-500 transition">Industries</button>
          <button onClick={() => scrollToSection('expertise')} className="text-left hover:text-blue-500 transition">Technical Expertise</button>
          <button onClick={() => scrollToSection('dashboard')} className="text-left hover:text-blue-500 transition">Dashboard Solutions</button>
          <button onClick={() => scrollToSection('process')} className="text-left hover:text-blue-500 transition">My Process</button>
          
          <div className="pt-10 border-t border-slate-800">
            <a 
              href="https://www.fiverr.com/roshni_trivedi" 
              target="_blank" 
              className="block bg-[#1dbf73] text-white text-center py-3 rounded-xl font-bold hover:brightness-110 transition"
            >
              Fiverr Profile
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}