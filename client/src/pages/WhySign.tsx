import { ArrowRight, Heart, Shield, PenLine, Star, Users, Lightbulb, CheckCircle, Clock } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const signed = [
  {
    name: 'Ryan Hutchinson',
    title: 'Sr. Software Engineering Manager',
    company: 'General Motors',
    linkedin: 'https://www.linkedin.com/in/ryahutchinson/',
    initials: 'RH',
  },
  {
    name: 'Taís Assad Della Santina',
    title: 'IT Executive · Head of Digital Transformation',
    company: 'CI&T',
    linkedin: 'https://www.linkedin.com/in/taisassad/',
    initials: 'TA',
  },
  {
    name: 'Chintan Parikh',
    title: 'Founder',
    company: 'Stealth',
    linkedin: 'https://www.linkedin.com/in/chintan-parikh-0241ab51/',
    initials: 'CP',
  },
]

const potential = [
  {
    name: 'Saeid Vosoughi',
    title: 'Software Development Manager',
    company: 'Autodesk',
    relationship: 'Current manager',
    linkedin: 'https://www.linkedin.com/in/saeidv',
    initials: 'SV',
  },
  {
    name: 'Edison Mukadah',
    title: 'Staff Software Engineer',
    company: 'Lime',
    relationship: 'Former Tasktop colleague',
    linkedin: 'https://www.linkedin.com/in/edison-mukadah',
    initials: 'EM',
  },
  {
    name: 'Surabhi Potnis',
    title: 'Senior Engineering Manager',
    company: 'Narvar',
    relationship: 'Former WineDirect colleague',
    linkedin: 'https://www.linkedin.com/in/surabhipotnis/',
    initials: 'SP',
  },
  {
    name: 'Dan Popovic',
    title: 'Senior Software Engineer',
    company: 'General Motors',
    relationship: 'Former General Motors colleague',
    linkedin: 'https://www.linkedin.com/in/danpops',
    initials: 'DP',
  },
]

const pending = [
  {
    name: 'Daniel Mills',
    title: 'Vice President of Software Engineering',
    company: 'Kuva BU · Sensirion Connected Solutions',
    linkedin: 'https://www.linkedin.com/in/danielmills/',
    initials: 'DM',
  },
  {
    name: 'Jeff Carroll',
    title: 'Vice President of Partnerships',
    company: 'Commerce7',
    linkedin: 'https://www.linkedin.com/in/jpcarroll/',
    initials: 'JC',
  },
  {
    name: 'Nicole Bryan',
    title: 'Founder',
    company: 'Metis Group',
    linkedin: 'https://www.linkedin.com/in/jnicolebryan/',
    initials: 'NB',
  },
]

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
                  desc: 'USCIS adjudicators are government officials reviewing thousands of petitions. They cannot personally verify the impact of the applicant\'s work. Your letter, as an independent expert, gives them the perspective they need to make a fair decision.',
                },
                {
                  icon: <Star className="w-6 h-6 text-gold-500" />,
                  title: 'It Validates the Applicant\'s Claims',
                  desc: 'The petition contains claims about the applicant\'s contributions and national importance. Each recommendation letter independently confirms those claims. Think of it as peer review for an immigration case.',
                },
                {
                  icon: <Users className="w-6 h-6 text-indigo-600" />,
                  title: 'It Shows Community Support',
                  desc: 'When multiple respected professionals in a field all vouch for the same person\'s impact, it creates a compelling narrative. USCIS sees that this individual is recognized by peers as someone whose presence in the U.S. matters.',
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
                  concern: 'What if I don\'t know them well enough?',
                  answer: 'You only need to write about what you know. A focused letter addressing specific professional interactions is more valuable than a generic letter from someone closer. USCIS values specificity over familiarity.',
                  color: 'border-l-gold-400',
                },
                {
                  concern: 'How much time will this take?',
                  answer: 'If a draft has already been prepared for your review, you need only read, request any adjustments, and sign. Most recommenders spend under 30 minutes total. The impact lasts forever.',
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

          {/* Signers panel */}
          <AnimatedSection delay={0.2} className="mt-16">
            <h2 className="font-display text-3xl font-bold text-navy-800 mb-2">Who Has Signed</h2>
            <p className="text-slate-500 text-sm mb-8">
              {signed.length} of {signed.length + pending.length} recommenders have signed so far.
            </p>

            {/* Signed */}
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {signed.map((p) => (
                <a
                  key={p.name}
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex flex-col items-center text-center hover:shadow-md hover:border-emerald-300 transition-all"
                >
                  <span className="absolute top-3 right-3 text-base">❤️</span>
                  <div className="relative mb-3">
                    <div className="w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                      {p.initials}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 fill-emerald-100" />
                    </div>
                  </div>
                  <p className="font-semibold text-navy-800 text-sm leading-snug group-hover:text-emerald-700 transition-colors">
                    {p.name}
                  </p>
                  <p className="text-slate-500 text-xs mt-1 leading-snug">{p.title}</p>
                  <p className="text-emerald-600 text-xs font-medium mt-1">{p.company}</p>
                </a>
              ))}
            </div>

            {/* Pending */}
            <div className="grid sm:grid-cols-3 gap-4">
              {pending.map((p) => (
                <a
                  key={p.name}
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col items-center text-center hover:shadow-sm transition-all opacity-60 hover:opacity-80"
                >
                  <span className="absolute top-3 right-3 text-base">🙏</span>
                  <div className="relative mb-3">
                    <div className="w-14 h-14 rounded-full bg-slate-300 flex items-center justify-center text-slate-500 font-bold text-lg">
                      {p.initials}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </div>
                  <p className="font-semibold text-slate-500 text-sm leading-snug">{p.name}</p>
                  <p className="text-slate-400 text-xs mt-1 leading-snug">{p.title}</p>
                  <p className="text-slate-400 text-xs font-medium mt-1">{p.company}</p>
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Potential recommenders */}
          <AnimatedSection delay={0.2} className="mt-12">
            <div className="border border-slate-200 rounded-xl p-6 bg-white">
              <h3 className="font-display text-xl font-bold text-navy-800 mb-1">Potential Recommenders</h3>
              <p className="text-slate-400 text-xs mb-5">People Maikon may reach out to if additional letters are needed to strengthen the case.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {potential.map((p) => (
                  <a
                    key={p.name}
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-semibold text-sm flex-shrink-0">
                      {p.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-navy-800 text-sm group-hover:text-navy-600 transition-colors truncate">{p.name}</p>
                      <p className="text-slate-400 text-xs truncate">{p.title} · {p.company}</p>
                      <p className="text-slate-300 text-xs italic">{p.relationship}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-12 text-center">
            <a href="#sign" className="btn-primary text-lg py-4 px-10">
              I'm Ready to Sign the Letter
              <ArrowRight className="w-5 h-5" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
