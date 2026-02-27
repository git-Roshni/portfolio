export default function Expertise(){
    return(
         <section id="expertise" className="py-16 bg-slate-900 px-10">
          <div className="max-w-6xl mx-auto text-white">
            <h3 className="text-3xl font-bold text-center mb-12">Technical Expertise</h3>
    
            <div className="grid md:grid-cols-3 gap-8">
              {/* Analysis & Logic */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition shadow-lg">
                <div className="text-blue-500 text-3xl mb-4">🔍</div>
                <h4 className="text-xl font-bold mb-3">Data Analysis</h4>
                <ul className="text-slate-400 space-y-2 text-sm">
                  <li>• Sales & Profitability Analysis </li>
                  <li>• Discount Impact Modeling </li>
                  <li>• Identifying Growth Drivers [cite: 609, 611]</li>
                </ul>
              </div>

              {/* Visualization */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-green-500 transition shadow-lg">
                <div className="text-green-500 text-3xl mb-4">📊</div>
                <h4 className="text-xl font-bold mb-3">Advanced Visualization</h4>
                <ul className="text-slate-400 space-y-2 text-sm">
                  <li>• Interactive Power BI Dashboards [cite: 575, 709, 829]</li>
                  <li>• Geospatial (Map) Reporting [cite: 625, 884]</li>
                  <li>• Comparative Time-Series Analysis [cite: 643, 645, 646]</li>
                </ul>
              </div>

              {/* Business Value */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-orange-500 transition shadow-lg">
                <div className="text-orange-500 text-3xl mb-4">🎯</div>
                <h4 className="text-xl font-bold mb-3">Business Intelligence</h4>
                <ul className="text-slate-400 space-y-2 text-sm">
                  <li>• KPI & Margin Optimization [cite: 597, 598]</li>
                  <li>• Customer Segmentation (Cohort Analysis) [cite: 706, 707]</li>
                  <li>• Strategic Summary Reporting [cite: 681, 962, 1137]</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    )
}