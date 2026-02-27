import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react'; 
import { useState } from 'react';
import ReactGA from 'react-ga4';
import Navbar from '../components/Navbar2';

export default function RetailStudy1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); 
      }
    };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
    
    // Analytics
    ReactGA.send({ hitType: "pageview", page: "/case-study/retail", title: "Retail Case Study" });
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const [showTopBtn, setShowTopBtn] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans pb-20">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrollToSection={scrollToSection} 
     />
      {/* --- TOP NAVIGATION BAR --- */}
      <nav className="fixed top-0 left-0 w-full z-50 py-3 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        {/* This internal div controls how far in the buttons sit */}
        <div className="max-w-6xl mx-auto px-10 flex justify-between items-center">
            
            {/* Left Side: Back Link */}
            <Link 
            to="/" 
            className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition-all"
            >
            ← Back to Portfolio
            </Link>

            {/* Right Side: Fiverr Button */}
            <a 
            href="https://fiverr.com/roshni_trivedi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#1dbf73] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-lg"
            >
            Hire me on Fiverr 🚀
            </a>
            
        </div>
        </nav>

      {/* --- BACK TO TOP BUTTON (Bottom Left) --- */}
      {showTopBtn && (
        <button 
          onClick={goToTop}
          className="fixed bottom-10 left-10 z-50 bg-blue-600 p-4 rounded-full shadow-2xl hover:bg-blue-500 transition-all hover:-translate-y-1"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      <div className="pt-32 max-w-4xl mx-auto px-6 text-center">
        
        {/* HEADER SECTION */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            📊 Retail Analytics Case Study
          </h1>
          <p className="text-xl md:text-2xl text-blue-300 font-light">
            How a Mid-Size Retail Chain Increased Profitability Without Relying on Discounts
          </p>
        </header>

        {/* SECTION 1: CASE STUDY BRIEF */}
        <section id="brief" className="mb-20">
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-2 mb-10">
             {/* IMAGE PATH: src/assets/retail_analysis_1.png */}
             <img src="/Retail_analysis_page-0001.jpg" alt="Retail Analysis Brief" className="rounded-2xl w-full" />
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-blue-400 uppercase tracking-wide">🔎 Case Study Brief (Executive Story)</h2>
          <div className="text-left bg-slate-800 p-8 rounded-2xl border border-slate-700 w-full leading-relaxed">
            <p className="mb-6 text-lg">A retail chain with <strong>₹14.3M sales, ₹3.83M profit and 26.75% margin</strong> wanted to understand:</p>
            <ul className="list-disc list-inside space-y-3 mb-8 text-slate-300">
              <li>Are discounts really driving growth?</li>
              <li>Which customers and products generate real profit?</li>
              <li>Are all stores performing equally?</li>
              <li>Where should management focus for higher ROI?</li>
            </ul>
            
            <h3 className="text-xl font-bold mb-4 text-white">The analysis revealed:</h3>
            <div className="grid grid-cols-1 gap-3 text-slate-200 mb-8">
              <p>✔ Profit is driven by order value, not discounts</p>
              <p>✔ Middle-aged, loyal customers are the most valuable</p>
              <p>✔ Sales are concentrated in a few products, cities, and customers</p>
              <p>✔ Stores are stable → no restructuring needed</p>
              <p>✔ Discounts increase volume but destroy margin and CLV</p>
            </div>
            <p className="p-5 bg-blue-900/40 border-l-4 border-blue-500 italic text-blue-100">
              👉 <strong>Final recommendation:</strong> Reduce blanket discounting and focus on retention + high-value segments
            </p>
          </div>
        </section>

        {/* SECTION 2: OVERVIEW PAGE */}
        <section id="overview" className="mb-20">
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-2 mb-10">
             {/* IMAGE PATH: src/assets/retail_overview.png */}
             <img src="/Retail_analysis_page-0001.jpg" alt="Overview Page" className="rounded-2xl w-full" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-emerald-400">🧭 Overview Page – What We See First</h2>
          <div className="text-slate-300 space-y-4 text-lg mb-10">
            <p>The overview (page 1) gives the business snapshot:</p>
            <ul className="inline-block text-left space-y-2">
              <li>• Strong revenue and healthy margin</li>
              <li>• Fashion is the top category</li>
              <li>• Q1 & Q3 peak sales months</li>
              <li>• A few stores and segments drive most profit</li>
              <li>• Margins drop as discounts increase</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-700 p-8 rounded-2xl text-left">
            <h3 className="text-xl font-bold mb-6 text-white border-b border-slate-700 pb-2">❓ Questions That Arise After Overview</h3>
            <p className="mb-4 text-slate-400 italic">This is what a business owner naturally asks:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
              <li>• Which customers are actually profitable?</li>
              <li>• Are top products also high-margin?</li>
              <li>• Is revenue dependent on a few cities?</li>
              <li>• Do loyal customers buy more without discounts?</li>
              <li>• Are some stores underperforming?</li>
              <li>• How much profit are discounts costing us?</li>
            </ul>
            <p className="mt-6 text-emerald-400 font-bold">👉 The next pages answer these.</p>
          </div>
        </section>

        {/* SECTION 3: CUSTOMER & PRODUCT DRIVERS */}
        <section id="cpd" className="mb-20">
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-2 mb-10">
             {/* IMAGE PATH: src/assets/retail_drivers.png */}
             <img src="/Retail_analysis_page-0002.jpg" alt="Customer & Product Drivers" className="rounded-2xl w-full" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-blue-400">👥 Page 2 – Customer & Product Drivers</h2>
          <p className="text-slate-400 mb-8 italic">This page explains who and what drives profit.</p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-white underline decoration-blue-500">What it shows</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Middle-aged & adult customers → highest sales and profit</li>
                <li>• 1–3 year tenure customers → highest CLV</li>
                <li>• Revenue concentrated in a few sub-categories</li>
                <li>• Top 5 customers contribute disproportionately</li>
                <li>• Sales vary significantly by city</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-white underline decoration-emerald-500">Business Meaning</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Retention &gt; acquisition</li>
                <li>• Loyalty programs will increase ROI</li>
                <li>• Customer concentration risk exists</li>
                <li>• Geographic targeting can boost performance</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-left p-6 bg-slate-800 rounded-xl border-l-4 border-emerald-500">
            <h4 className="font-bold mb-2">👉 Answers:</h4>
            <p className="text-slate-300">✔ <strong>Who is profitable?</strong> → Loyal, middle-aged customers</p>
            <p className="text-slate-300">✔ <strong>Which products matter?</strong> → Few high-revenue sub-categories</p>
            <p className="text-slate-300">✔ <strong>Where to focus?</strong> → High-performing cities</p>
          </div>
        </section>

        {/* SECTION 4: STORE PERFORMANCE */}
        <section id="sp" className="mb-20">
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-2 mb-10">
             {/* IMAGE PATH: src/assets/retail_stores.png */}
             <img src="/Retail_analysis_page-0003.jpg" alt="Store Performance" className="rounded-2xl w-full" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-purple-400">🏬 Page 3 – Store Performance</h2>
          <p className="text-slate-400 mb-8 font-serif italic text-lg">Now the management question: “Do we need to fix or close any store?”</p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="font-bold text-white mb-4">What it shows</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• All stores have similar margins (~26–27%)</li>
                <li>• Discount levels are consistent across stores</li>
                <li>• No store shows risk signals</li>
                <li>• Differences are operational, not performance issues</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="font-bold text-white mb-4">Business Meaning</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• No need for restructuring</li>
                <li>• Network is stable</li>
                <li>• Focus should be on strategy, not store closures</li>
              </ul>
            </div>
          </div>
          <p className="text-left font-bold text-purple-400">👉 Answers: ✔ Are stores underperforming? → No | ✔ Is pricing inconsistent? → No</p>
        </section>

        {/* SECTION 5: DISCOUNT IMPACT */}
        <section id="discount" className="mb-20">
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-2 mb-10">
             {/* IMAGE PATH: src/assets/retail_discounts.png */}
             <img src="/Retail_analysis_page-0004.jpg" alt="Discount Impact" className="rounded-2xl w-full" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-red-400">💸 Page 4 – Transaction & Discount Impact</h2>
          <p className="text-slate-400 mb-8 italic">This page answers the big myth: “Discounts drive profit.”</p>
          
          <div className="bg-red-900/10 border border-red-500/30 p-10 rounded-3xl text-left mb-8">
            <h3 className="text-xl font-bold text-red-400 mb-6">What it shows:</h3>
            <ul className="space-y-4 text-slate-200 text-lg">
              <li>📉 Profit per order drops as discounts increase</li>
              <li>💎 CLV is highest for no-discount customers</li>
              <li>⚠️ Most transactions happen in high discount band</li>
              <li className="text-2xl font-black text-red-500">💰 ₹1.17M profit lost due to discounting</li>
              <li>📅 2024 had peak sales but also higher discount cost</li>
            </ul>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl text-left">
            <h3 className="font-bold mb-4">Business Meaning</h3>
            <p className="text-slate-300 leading-relaxed">Discounts boost volume but kill profitability. High-discount customers are low-value. Profit comes from full-price buyers.</p>
            <div className="mt-6 font-bold text-red-400">👉 Answers: ✔ Are discounts worth it? → No | ✔ Where is profit leaking? → High discount band</div>
          </div>
        </section>

        {/* SECTION 6: COHORT ANALYSIS */}
        <section id="cohort" className="mb-20">
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-2 mb-10">
             {/* IMAGE PATH: src/assets/retail_cohort.png */}
             <img src="/Retail_analysis_page-0005.jpg" alt="Cohort & Loyalty" className="rounded-2xl w-full" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-emerald-400">🔁 Page 5 – Cohort & Loyalty Analysis</h2>
          <p className="text-slate-400 mb-8 italic">Final leadership question: “If we reduce discounts, will customers leave?”</p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="font-bold text-white mb-4">What it shows</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• 100% repeat rate even without discounts</li>
                <li>• Full-price buyers remain loyal</li>
                <li>• Profit per customer is strong without promotions</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="font-bold text-white mb-4">Business Meaning</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Loyalty is not discount-driven</li>
                <li>• Safe to reduce discount frequency</li>
                <li>• Margin can improve without losing customers</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-left font-bold text-emerald-400">👉 Answers: ✔ Will sales drop without discounts? → Unlikely | ✔ Are loyal customers price sensitive? → No</p>
        </section>

        {/* SECTION 7: KEY INSIGHTS */}
        <section id="insights" className="mb-20 bg-slate-800 p-10 rounded-3xl border border-slate-700 text-left">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">📈 Key Business Insights (For Decision Makers)</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-200">
            <li className="flex gap-3"><span>🔹</span> Profit comes from high AOV + loyal customers</li>
            <li className="flex gap-3"><span>🔹</span> Discounts should be targeted, not blanket</li>
            <li className="flex gap-3"><span>🔹</span> Focus on middle-aged repeat buyers</li>
            <li className="flex gap-3"><span>🔹</span> Invest in top cities & high-margin products</li>
            <li className="flex gap-3"><span>🔹</span> Maintain current store network</li>
          </ul>
        </section>

        {/* SECTION 8: ACTION PLAN */}
        <section id="plan" className="mb-20 p-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-[3rem] text-white">
          <h2 className="text-4xl font-black mb-10 text-center uppercase tracking-tighter">🚀 Action Plan</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all cursor-default">
              <span className="text-2xl mb-2 block">1️⃣</span>
              <p className="font-bold">Reduce high-discount campaigns</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all cursor-default">
              <span className="text-2xl mb-2 block">2️⃣</span>
              <p className="font-bold">Launch loyalty program for 1–3 year customers</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all cursor-default">
              <span className="text-2xl mb-2 block">3️⃣</span>
              <p className="font-bold">Prioritize high-margin product bundles</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all cursor-default">
              <span className="text-2xl mb-2 block">4️⃣</span>
              <p className="font-bold">Target top cities with premium pricing</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all cursor-default">
              <span className="text-2xl mb-2 block">5️⃣</span>
              <p className="font-bold">Track CLV, not just sales</p>
            </div>
          </div>
        </section>

        {/* FINAL SECTION: WHY THIS WORKS */}
        <section className="mb-32 text-left bg-blue-900/10 p-10 rounded-3xl border border-blue-500/20">
          <h2 className="text-2xl font-bold mb-6 text-blue-300">🎯 Why This Case Study Works for Clients</h2>
          <ul className="space-y-4 text-slate-300">
            <li className="flex gap-3"><span>✅</span> Shows clear revenue → profit → action flow</li>
            <li className="flex gap-3"><span>✅</span> Answers real business questions</li>
            <li className="flex gap-3"><span>✅</span> Proves data → strategy → decision</li>
            <li className="flex gap-3"><span>✅</span> Demonstrates impact (₹1.17M profit leakage found)</li>
          </ul>
          <p className="mt-8 text-xl font-bold text-white text-center">
            Perfect to position you as a decision-focused freelance data analyst! 💼📊
          </p>
        </section>

      </div>
    </div>
  );
}