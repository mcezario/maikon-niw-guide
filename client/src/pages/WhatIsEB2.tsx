import { ArrowRight, GraduationCap, Briefcase, Globe, Award, CheckCircle } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function WhatIsEB2() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-3">Understanding EB2 NIW</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-5">
              What is the EB2 National Interest Waiver?
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed max-w-3xl mx-auto">
              A visa pathway designed for people whose expertise and contributions are so valuable
              that the United States waives its usual requirements to welcome them.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-3xl font-bold text-navy-800 mb-6">The Big Picture</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The United States immigration system has several pathways for people who wish to live and work
                permanently in the country. The EB2 NIW — Employment-Based Second Preference, National Interest
                Waiver — is one of the most prestigious and self-directed of these pathways.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Unlike most employment-based visas, which require a job offer from a U.S. employer and often
                a complex labor certification process, the NIW allows a person to petition on their own behalf,
                arguing that their continued work in the United States will benefit the nation as a whole.
              </p>
            </div>
          </AnimatedSection>

          {/* Two paths */}
          <AnimatedSection delay={0.2} className="mt-12">
            <h2 className="font-display text-3xl font-bold text-navy-800 mb-8">Who Qualifies for EB2?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card border border-navy-100 bg-navy-50">
                <div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-navy-800 text-lg mb-2">Advanced Degree</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Holders of a U.S. master's degree (or equivalent), or a bachelor's degree plus
                  at least five years of progressive experience in the field.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {['PhD or Master\'s degree', 'Bachelor\'s + 5 years experience', 'International equivalent degrees'].map(i => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card border border-amber-100 bg-amber-50">
                <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-navy-800 text-lg mb-2">Exceptional Ability</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  A degree of expertise significantly above the ordinary in sciences, arts, or business,
                  demonstrated by meeting at least 3 of 6 USCIS criteria.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {['Publications in professional journals', 'Membership in professional associations', 'Contributions of major significance'].map(i => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* NIW Criteria */}
          <AnimatedSection delay={0.3} className="mt-16">
            <h2 className="font-display text-3xl font-bold text-navy-800 mb-4">The Three-Prong NIW Test</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              To qualify for the National Interest Waiver, applicants must satisfy the <em>Matter of Dhanasar</em> framework — the legal standard set by USCIS:
            </p>
            <div className="space-y-6">
              {[
                {
                  num: '01',
                  title: 'Substantial Merit and National Importance',
                  desc: 'The proposed endeavor must have both substantial merit (significant value) and national importance (broad impact beyond a local or regional level). Fields can include STEM, business, health, education, arts, athletics, and more.',
                  color: 'bg-navy-700',
                },
                {
                  num: '02',
                  title: 'Well Positioned to Advance the Endeavor',
                  desc: 'The applicant must demonstrate they are well-positioned to advance their proposed endeavor, based on education, skills, record of success, and a concrete plan for future work in the field.',
                  color: 'bg-gold-500',
                },
                {
                  num: '03',
                  title: 'Beneficial to Waive the Job Requirement',
                  desc: 'On balance, it would benefit the United States to waive the requirement for a job offer and labor certification. This considers whether the work is urgent, unique, or whether requiring a sponsor would be an unnecessary burden.',
                  color: 'bg-crimson-500',
                },
              ].map(({ num, title, desc, color }) => (
                <div key={num} className="flex gap-5 bg-slate-50 rounded-2xl p-6">
                  <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                    {num}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-800 mb-2">{title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Fields */}
          <AnimatedSection delay={0.2} className="mt-16">
            <h2 className="font-display text-3xl font-bold text-navy-800 mb-8">Fields That Commonly Qualify</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: <Globe className="w-5 h-5" />, field: 'Technology & Engineering', examples: 'Software, AI, biotech, robotics' },
                { icon: <Briefcase className="w-5 h-5" />, field: 'Business & Entrepreneurship', examples: 'Innovation, economic development' },
                { icon: <GraduationCap className="w-5 h-5" />, field: 'Research & Academia', examples: 'Sciences, education, policy' },
                { icon: <Award className="w-5 h-5" />, field: 'Healthcare & Medicine', examples: 'Medical research, clinical work' },
                { icon: <Globe className="w-5 h-5" />, field: 'Arts & Culture', examples: 'Creative fields with national impact' },
                { icon: <Briefcase className="w-5 h-5" />, field: 'National Security', examples: 'Defense, intelligence, cyber' },
              ].map(({ icon, field, examples }) => (
                <div key={field} className="bg-white border border-slate-200 rounded-xl p-4 hover:border-navy-300 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-2 text-navy-700 mb-2">
                    {icon}
                    <h4 className="font-semibold text-sm">{field}</h4>
                  </div>
                  <p className="text-slate-500 text-xs">{examples}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-16 text-center">
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-10 text-white">
              <h3 className="font-display text-2xl font-bold mb-4">Ready to See Why Your Letter Matters?</h3>
              <p className="text-navy-300 mb-6">
                Now that you understand what EB2 NIW is, learn about the critical role recommendation
                letters play in the petition process.
              </p>
              <a href="#why-sign" className="btn-secondary">
                Why Recommenders Matter <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
