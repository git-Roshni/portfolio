import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import Navbar from '../components/Navbar3';

export default function CustomerChurnStudy() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

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

    ReactGA.send({
      hitType: "pageview",
      page: "/case-study/churn",
      title: "Customer Churn Case Study"
    });

  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (

    <div className="min-h-screen bg-slate-900 text-white font-sans pb-20">

      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* TOP NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 py-3 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">

        <div className="max-w-6xl mx-auto px-10 flex justify-between items-center">

          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition-all"
          >
            ← Back to Portfolio
          </Link>

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


      {/* BACK TO TOP */}
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="fixed bottom-10 left-10 z-50 bg-blue-600 p-4 rounded-full shadow-2xl hover:bg-blue-500 transition-all"
        >
          ↑
        </button>
      )}


      <div className="pt-32 max-w-4xl mx-auto px-6 text-center">


        {/* HEADER */}
        <header className="mb-16">

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            📉 Customer Churn Analysis & Retention Strategy
          </h1>

          <p className="text-xl md:text-2xl text-blue-300 font-light">
            Understanding customer disengagement patterns and identifying opportunities to improve retention
          </p>

        </header>


        {/* BUSINESS OBJECTIVE */}
        <section id="objective" className="mb-20">

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-left">

            <h2 className="text-3xl font-bold mb-6 text-blue-400 uppercase tracking-wide">
              🎯 Business Objective
            </h2>

            <p className="mb-6 text-lg">
                A business wanted to understand why some customers gradually stop purchasing 
                and how early churn signals can be identified.
                </p>

                <ul className="list-disc list-inside space-y-3 mb-8 text-slate-300">
                <li>Which customers show early signs of churn?</li>
                <li>How does satisfaction change across churn groups?</li>
                <li>Do membership tiers influence customer retention?</li>
                <li>Which customers require targeted re-engagement strategies?</li>
                </ul>

                <h3 className="text-xl font-bold mb-4 text-white">The analysis revealed:</h3>

                <div className="grid grid-cols-1 gap-3 text-slate-200 mb-8">

                <p>✔ Active customers (64%) are mostly Gold members with the highest spending and satisfaction levels</p>

                <p>✔ At-risk customers (29%) show declining engagement and are largely Bronze members</p>

                <p>✔ High-risk customers (7%) were previously valuable customers but now show the lowest satisfaction</p>

                <p>✔ Customer inactivity increases significantly as satisfaction declines</p>

                </div>

                <p className="p-5 bg-blue-900/40 border-l-4 border-blue-500 italic text-blue-100">

                👉 <strong>Final recommendation:</strong> Improve lower-tier membership benefits, collect feedback from disengaged customers, and launch targeted retention campaigns before customers fully churn.

                </p>

          </div>

        </section>


        {/* DATASET */}
        <section id="dataset" className="mb-20">

          <h2 className="text-3xl font-bold mb-6 text-emerald-400">
            🗂 Data & Methodology
          </h2>

          <div className="bg-slate-800 p-8 rounded-2xl text-left">

            <p className="mb-6 text-slate-300">

              The dataset includes <strong>348 unique customers</strong>. Each row represents
              one customer and includes demographics, membership type, satisfaction level,
              and purchase behavior.

            </p>

            <h3 className="font-bold mb-4 text-white">
              Churn Classification
            </h3>

            <ul className="space-y-2 text-slate-300">

              <li>🟢 Active → Purchased within 30 days</li>
              <li>🟠 At Risk → Inactive 30–50 days</li>
              <li>🔴 High Risk → Inactive more than 50 days</li>

            </ul>

          </div>

        </section>


        {/* DASHBOARD IMAGE */}
        <section id="dashboard" className="mb-20">

          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-2 mb-10">

            <img
              src="/churn_dashboard.jpg"
              alt="Customer Churn Dashboard"
              className="rounded-2xl w-full"
            />

          </div>

          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            📊 Customer Churn Dashboard
          </h2>

        </section>


        {/* CUSTOMER SEGMENTS */}
        <section id="segments" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-purple-400">
            👀 Key Insights
          </h2>

          <h2 className="text-3xl font-bold mb-8 text-purple-400">
            👥 Customer Segments
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">

            <div className="bg-green-900/20 border border-green-500/40 p-6 rounded-xl">

              <h3 className="font-bold text-green-400 mb-4">
                Active Customers
              </h3>

              <ul className="space-y-2 text-slate-300">

                <li>64% of total customers</li>
                <li>Mostly Gold members</li>
                <li>Highest spending levels</li>
                <li>Majority satisfied</li>

              </ul>
               <p className="mb-4">
                    <strong className="text-green-400">Active customers</strong> form the majority and are
                    primarily Gold members with higher satisfaction and stronger purchasing activity.
                    This suggests that higher-tier membership benefits are successfully driving engagement.
                </p>

            </div>


            <div className="bg-yellow-900/20 border border-yellow-500/40 p-6 rounded-xl">

              <h3 className="font-bold text-yellow-400 mb-4">
                At Risk Customers
              </h3>

              <ul className="space-y-2 text-slate-300">

                <li>29% of customers</li>
                <li>Mostly Bronze membership</li>
                <li>Lower spending</li>
                <li>Increasing dissatisfaction</li>

              </ul>
              <p className="mb-4">
                <strong className="text-yellow-400">At-risk customers</strong> show declining activity and
                are largely Bronze members, indicating weaker loyalty incentives and gradually
                decreasing engagement.
            </p>
            </div>

            <div className="bg-red-900/20 border border-red-500/40 p-6 rounded-xl">

              <h3 className="font-bold text-red-400 mb-4">
                High Risk Customers
              </h3>

              <ul className="space-y-2 text-slate-300">

                <li>7% of customers</li>
                <li>Previously high spenders</li>
                <li>Currently dissatisfied</li>
                <li>Longest inactivity period</li>

              </ul>
               <p>
                    <strong className="text-red-400">High-risk customers</strong> represent a smaller but critical
                    segment. Many of them were previously engaged customers but now show the lowest
                    satisfaction and longest inactivity periods, signaling potential churn if no
                    retention action is taken.
                </p>
            </div>

          </div>
          <div className="mt-10 bg-indigo-900/20 border border-indigo-500/40 p-6 rounded-xl text-left">

            <h3 className="text-lg font-bold text-indigo-300 mb-3">
                🔍 Key Behavioral Insight
            </h3>

            <p className="text-slate-300 leading-relaxed">
                The churn pattern shows that disengagement happens gradually rather than suddenly.
                Most customers remain active within the first <strong>30 days</strong> after a purchase,
                but inactivity begins to increase shortly after that period.
            </p>

            <p className="mt-3 text-slate-300 leading-relaxed">
                Customers typically move from <strong>Active → At Risk → High Risk</strong> as the
                inactivity period grows. This suggests that churn is not an immediate event but a
                progressive decline in engagement over time.
            </p>

            <p className="mt-3 text-indigo-200 font-medium">
                👉 The critical opportunity for intervention occurs before customers cross the
                30-day inactivity mark.
            </p>

            </div>
            <div className="mt-8 bg-purple-900/20 border border-purple-500/40 p-6 rounded-xl text-left">

                <h3 className="text-lg font-bold text-purple-300 mb-3">
                    📊 Engagement Insight
                </h3>

                <p className="text-slate-300 leading-relaxed">
                    The analysis also shows that declining customer satisfaction appears
                    before churn risk increases. Active customers report the highest
                    satisfaction levels, while At-Risk customers show growing dissatisfaction.
                </p>

                <p className="mt-3 text-slate-300 leading-relaxed">
                    High-Risk customers are largely unsatisfied, suggesting that
                    disengagement begins with declining satisfaction and eventually
                    leads to longer inactivity periods.
                </p>

                <p className="mt-3 text-purple-200 font-medium">
                    👉 Monitoring satisfaction alongside inactivity can help businesses
                    detect churn signals earlier and intervene before customers disengage completely.
                </p>

                </div>

        </section>


        {/* RETENTION STRATEGY */}
        <section id="strategy" className="mb-20">

          <h2 className="text-3xl font-bold mb-8 text-blue-400">
            🔧 Retention Strategy
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">

            <div className="bg-slate-800 p-6 rounded-xl">

              <h3 className="font-bold mb-3">
                1️⃣ Collect Customer Feedback
              </h3>

              <p className="text-slate-300">
                Gather feedback from churned or inactive customers through surveys,
                exit questionnaires, and outreach to previously high-value users.
              </p>

            </div>


            <div className="bg-slate-800 p-6 rounded-xl">

              <h3 className="font-bold mb-3">
                2️⃣ Improve Membership Program
              </h3>

              <p className="text-slate-300">
                Evaluate reward structures across Bronze, Silver, and Gold tiers
                and improve incentives to encourage upgrades and engagement.
              </p>

            </div>


            <div className="bg-slate-800 p-6 rounded-xl">

              <h3 className="font-bold mb-3">
                3️⃣ Re-engagement Campaigns
              </h3>

              <p className="text-slate-300">
                Launch targeted promotions, reminder emails, and loyalty incentives
                to bring inactive customers back.
              </p>

            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all cursor-default">
                <span className="text-2xl mb-2 block">4️⃣</span>
                <p className="font-bold mb-2">Monitor churn signals continuously</p>
                <p className="text-sm text-slate-200">
                    Because the churn cycle is relatively short, businesses should begin tracking
                    customer inactivity from the <strong>15th day after the last purchase</strong>.
                    Early signals such as declining activity or satisfaction can trigger reminder
                    emails, promotional offers, or loyalty incentives before customers move into
                    the At-Risk stage.
                </p>
            </div>

          </div>

        </section>


        {/* BUSINESS IMPACT */}
        <section id="outcome" className="mb-32 text-left bg-blue-900/10 p-10 rounded-3xl border border-blue-500/20">

          <h2 className="text-2xl font-bold mb-6 text-blue-300">
            📈 Expected Business Impact
          </h2>

          <ul className="space-y-3 text-slate-300">

            <li>✔ Improved customer retention by identifying churn earlier</li>
            <li>✔ Increased engagement among Bronze and Silver members</li>
            <li>✔ Higher repeat purchase rates through targeted campaigns</li>
            <li>✔ Better customer experience through feedback-driven improvements</li>

          </ul>

        </section>

      </div>
    </div>
  );
}