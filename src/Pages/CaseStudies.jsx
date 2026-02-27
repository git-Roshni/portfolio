import { Link } from 'react-router-dom';

export default function CaseStudies() {
  return (
   <section id="case-studies" className="py-12 bg-slate-50 px-10 border-b border-slate-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest mb-10">Featured Projects</h2>
            
            <div className="grid md:grid-cols-1 gap-8">
              {/* Retail Analysis Brief */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="md:max-w-2xl">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Retail Profitability & Discount Optimization
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Analyzed 5,000+ transactions across a $14.3M retail portfolio to identify how aggressive discounting was eroding margins. I discovered that while "High Discount" groups drove volume, "No Discount" customers contributed a massive 32.35% to total profit.
                  </p>
                  <div className="flex gap-4">
                    <span className="text-xs font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded">Power BI</span>
                    <span className="text-xs font-bold bg-green-50 text-green-600 px-3 py-1 rounded">Business Logic</span>
                    <span className="text-xs font-bold bg-purple-50 text-purple-600 px-3 py-1 rounded">Cohort Analysis</span>
                  </div>
                </div>
                
                <Link 
                  to="/case-study/retail" 
                  className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all hover:scale-105 shadow-lg"
                >
                  View Full Case Study
                </Link>
              </div>

              {/* Placeholder for your next project */}
              <div className="bg-slate-100 p-8 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center">
                <p className="text-slate-400 font-medium italic">New Case Study Coming Soon...</p>
              </div>
            </div>
          </div>
        </section>
)}