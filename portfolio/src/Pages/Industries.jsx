export default function Industries() {
    return(
        <section id="industries" className="py-20 px-10 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Industries Served</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Tailored data solutions designed to solve the unique challenges of modern business sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Category 1 */}
              <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛍️</div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">Retail & Consumer Goods</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Optimizing inventory turnover and store performance through deep-dive sales analysis.
                </p>
              </div>

              {/* Category 2 */}
              <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💻</div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">E-commerce & Digital</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Tracking customer acquisition costs (CAC) and lifetime value (CLV) for online growth.
                </p>
              </div>

              {/* Category 3 */}
              <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📦</div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">Operational Excellence</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Streamlining supply chains and logistics by identifying bottlenecks in the data flow.
                </p>
              </div>

              {/* Category 4 */}
              <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤝</div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">Subscription & Services</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Reducing churn and improving retention rates through behavioral pattern recognition.
                </p>
              </div>
            </div>
          </div>
        </section>
    )}