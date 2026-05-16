import { ArrowRight, Heart, Shield, PenLine, Star, Users, Lightbulb } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function WhySign() {
  return (
    <div>
      {/* Header */}
      <section className="relative bg-gradient-to-br from-crimson-700 via-crimson-600 to-navy-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(12)].map((_, i) => (
            <Star
              key={i}
              className="absolute fill-white text-white"
              style={{ width: 24, height: 24, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-widest text-crimson-200 mb-3">The Human Side</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-5">
              Why Your Signature Matters
            </h1>
            <p className="text-xl text-crimson-100 leading-relaxed max-w-3xl mx-auto">
              Behind every petition is a human story — years of work, sacrifice, and hope.
              Your letter is the human voice in a bureaucratic process.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Emotional story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-navy-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-navy-100 mb-16">
              <Heart className="w-10 h-10 text-crimson-500 mb-4" />
              <h2 className="font-display text-3xl font-bold text-navy-800 mb-5">The Story Behind the Petition</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Maikon has spent years building his career as a software developer — learning,
                  adapting, and contributing to technology that makes a real difference. And now
                  he has made a deeply personal decision: to build his future in the United States,
                  a place that has always stood for opportunity, innovation, and freedom.
                </p>
                <p>
                  The EB2 NIW process is not quick or easy. It demands thousands of dollars in legal
                  fees, meticulous documentation, and an extraordinary amount of personal courage.
                  Maikon must argue, in detail and with evidence, that his work in software
                  development is valuable enough to earn permanent residence.
                </p>
                <p className="font-semibold text-navy-800 text-lg">
                  And then he must ask others — people he respects and admires — to stand behind
                  him and say: "I've seen Maikon's work and I support his application."
                </p>
                <p>
                  That is what you're being asked to do. Not to vouch for his character casually —
                  but to lend your professional credibility to a cause that means everything to him.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* What the letter does */}
          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-3xl font-bold text-navy-800 mb-8">What the Letter Actually Does</h2>
            <div className="space-y-6">
              {[
                {
                  icon: <PenLine className="w-6 h-6 text-navy-600" />,
                  title: 'It Speaks to USCIS Directly',
                  desc: "USCIS adjudicators are government officials reviewing thousands of petitions. They cannot personally verify the impact of the applicant's work. Your letter, as an independent expert, gives them the perspective they need to make a fair decision.",
                },
                {
                  icon: <Star className="w-6 h-6 text-gold-500" />,
                  title: "It Validates the Applicant's Claims",
                  desc: "The petition contains claims about the applicant's contributions and national importance. Each recommendation letter independently confirms those claims. Think of it as peer review for an immigration case.",
                },
                {
                  icon: <Users className="w-6 h-6 text-indigo-600" />,
                  title: 'It Shows Community Support',
                  desc: "When multiple respected professionals in a field all vouch for the same person's impact, it creates a compelling narrative. USCIS sees that this individual is recognized by peers as someone whose presence in the U.S. matters.",
                },
                {
                  icon: <Lightbulb className="w-6 h-6 text-emerald-600" />,
                  title: 'It Can Make or Break the Case',
                  desc: 'Petitions with strong, specific, and credible recommendation letters have significantly higher approval rates. Your expertise and willingness to put it in writing could be the decisive factor.',
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-5 bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-800 mb-2">{title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Addressing concerns */}
          <AnimatedSection delay={0.2} className="mt-16">
            <h2 className="font-display text-3xl font-bold text-navy-800 mb-8">Addressing Your Concerns</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  concern: "What if Maikon's application gets denied?",
                  answer: 'A denial does not reflect on you or your recommendation. USCIS decisions are complex and consider many factors. Your letter is your honest professional opinion — nothing more, nothing less.',
                  color: 'border-l-navy-400',
                },
                {
                  concern: 'Am I taking any legal risk?',
                  answer: 'None. Recommendation letters are legally protected professional opinions. Recommenders are never held liable for the outcome of an immigration petition. This is true even if information in the petition is later found to be inaccurate — as long as your letter reflects your honest knowledge.',
                  color: 'border-l-emerald-400',
                },
                {
                  concern: "What if I don't know them well enough?",
                  answer: 'You only need to write about what you know. A focused letter addressing specific professional interactions is more valuable than a generic letter from someone closer. USCIS values specificity over familiarity.',
                  color: 'border-l-gold-400',
                },
                {
                  concern: 'How much time will this take?',
                  answer: "If a draft has already been prepared for your review, you need only read, request any adjustments, and sign. Most recommenders spend under 30 minutes total. The impact lasts forever.",
                  color: 'border-l-crimson-400',
                },
              ].map(({ concern, answer, color }) => (
                <div key={concern} className={`bg-white border border-l-4 ${color} border-slate-200 rounded-xl p-5 shadow-sm`}>
                  <h4 className="font-semibold text-navy-800 mb-2 text-sm">"{concern}"</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{answer}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Security */}
          <AnimatedSection delay={0.2} className="mt-16">
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-10 text-white flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-3">You Are Protected</h3>
                <p className="text-navy-300 leading-relaxed">
                  Recommendation letters are covered under professional opinion immunity. Recommenders
                  in EB2 NIW cases have no legal exposure. You are simply sharing your professional
                  perspective — and that is both honorable and necessary.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-12 text-center">
            <a href="#who-has-signed" className="btn-primary text-lg py-4 px-10">
              See Who Has Signed
              <ArrowRight className="w-5 h-5" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
