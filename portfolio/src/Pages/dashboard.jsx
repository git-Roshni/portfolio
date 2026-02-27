export default function Dashboard(){
    return(
                <section id="dashboard" className="py-20 px-10 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Choose your scale</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">📊 Dashboard Solutions</h2>
              <p className="text-slate-600">Choose the dashboard solution that fits your data complexity and business goals.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Starter Dashboard */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all flex flex-col">
                <h4 className="text-xl font-bold text-slate-900 mb-2">🔹 Starter Dashboard</h4>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  A single-page dashboard designed to track your core KPIs from one data source. Ideal for small teams that need clear, quick insights without complexity.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-2">📌 Includes:</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• KPI summary</li>
                    <li>• Trend analysis</li>
                    <li>• Clean visual layout</li>
                  </ul>
                </div>
              </div>

              {/* Business Performance */}
              <div className="bg-white p-8 rounded-3xl shadow-md border-2 border-blue-500 hover:shadow-xl transition-all flex flex-col transform md:-translate-y-2">
                <div className="bg-blue-500 text-white text-[10px] font-bold uppercase py-1 px-3 rounded-full self-start mb-4">Most Popular</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">🔹 Business Performance</h4>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  A multi-page dashboard with structured metrics, filters, and data cleaning. Built to monitor performance across departments.
                </p>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="text-xs font-bold text-blue-400 uppercase mb-2">📌 Includes:</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Data modeling & KPI logic</li>
                    <li>• Interactive visuals</li>
                    <li>• Drill-down views</li>
                  </ul>
                </div>
              </div>

              {/* Advanced Analytics */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all flex flex-col">
                <h4 className="text-xl font-bold text-slate-900 mb-2">🔹 Advanced Analytics</h4>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  A custom solution for deeper analysis, automation, and scalable reporting. Designed for data-driven teams.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-2">📌 Includes:</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• SQL-ready data structure</li>
                    <li>• Automated workflows</li>
                    <li>• Full documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a 
                href="https://www.fiverr.com/roshni_trivedi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1dbf73] hover:bg-[#19a463] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:scale-105"
              >
                <span>💼</span> Hire this on Fiverr
              </a>
              <p className="text-slate-400 text-xs mt-4 italic">Secure payments and project management through Fiverr</p>
            </div>
          </div>
        </section>
    )
}