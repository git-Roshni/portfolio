export default function Process(){
    return(
        <section id="process" className="py-20 px-10 bg-slate-900 text-white border-t border-slate-800">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-16">
              <span className="text-3xl">⚙️</span>
              <h3 className="text-3xl font-bold">My Process</h3>
            </div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative pl-12 border-l-2 border-blue-600">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                <h4 className="text-xl font-bold mb-2">1️⃣ Discovery & Goal Alignment</h4>
                <p className="text-slate-400 mb-3">We discuss your business objectives, key KPIs, and the questions your data needs to answer.</p>
                <p className="text-sm font-semibold text-blue-400">📌 Outcome: Clear project scope and success metrics.</p>
              </div>

              {/* Step 2 */}
              <div className="relative pl-12 border-l-2 border-blue-600">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <h4 className="text-xl font-bold mb-2">2️⃣ Data Review & Preparation</h4>
                <p className="text-slate-400 mb-3">Your dataset is structured, validated, and transformed into an analysis-ready format.</p>
                <p className="text-sm font-semibold text-blue-400">📌 Outcome: Clean, reliable data for accurate insights.</p>
              </div>

              {/* Step 3 */}
              <div className="relative pl-12 border-l-2 border-blue-600">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <h4 className="text-xl font-bold mb-2">3️⃣ Dashboard Design & Prototype</h4>
                <p className="text-slate-400 mb-3">You choose from proven templates or request a custom layout. A prototype is shared for feedback before development.</p>
                <p className="text-sm font-semibold text-blue-400">📌 Outcome: Approved dashboard structure.</p>
              </div>

              {/* Step 4 */}
              <div className="relative pl-12 border-l-2 border-blue-600">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <h4 className="text-xl font-bold mb-2">4️⃣ Development & Iteration</h4>
                <p className="text-slate-400 mb-3">The full dashboard is built with validated KPIs and interactive visuals. Revisions are included based on your selected package.</p>
                <p className="text-sm font-semibold text-blue-400">📌 Outcome: Business-ready dashboard.</p>
              </div>

              {/* Step 5 */}
              <div className="relative pl-12 border-l-2 border-blue-600">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <h4 className="text-xl font-bold mb-2">5️⃣ Delivery & Documentation</h4>
                <p className="text-slate-400 mb-3">You receive the final dashboard, KPI definitions, and a usage guide for easy adoption.</p>
                <p className="text-sm font-semibold text-blue-400">📌 Outcome: Actionable insights you can use immediately.</p>
                <p className="text-xs italic text-slate-500">Typical delivery: 3–5 business days after data approval.</p>
              </div>
            </div>
          </div>
        </section>
    )
}