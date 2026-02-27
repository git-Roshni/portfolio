export default function ConsultingServices() {
    return (
        <section id="consulting-services" className="py-16 bg-white px-10">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">Consulting Services</h3>
            <div className="grid md:grid-cols-3 gap-8">
      
              {/* Service 1 */}
              <div className="p-8 border border-slate-200 rounded-xl hover:shadow-xl transition shadow-sm">
                <div className="text-blue-600 text-3xl mb-4">📊</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Interactive Dashboards</h4>
                <p className="text-slate-600">Custom Power BI or Tableau solutions that track your KPIs in real-time.</p>
              </div>

              {/* Service 2 */}
              <div className="p-8 border border-slate-200 rounded-xl hover:shadow-xl transition shadow-sm">
                <div className="text-blue-600 text-3xl mb-4">⚙️</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Process Automation</h4>
                <p className="text-slate-600">Automating manual data entry and report generation using Python and SQL.</p>
              </div>

              {/* Service 3 */}
              <div className="p-8 border border-slate-200 rounded-xl hover:shadow-xl transition shadow-sm">
                <div className="text-blue-600 text-3xl mb-4">💡</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Data Strategy</h4>
                <p className="text-slate-600">Helping small businesses set up their data infrastructure from scratch.</p>
              </div>

            </div>
          </div>
        </section>

    )}