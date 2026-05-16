import { ArrowRight, CheckCircle, Clock, Users } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const independent = [
  {
    name: 'Chintan Parikh',
    title: 'Founder',
    company: 'Stealth',
    linkedin: 'https://www.linkedin.com/in/chintan-parikh-0241ab51/',
    initials: 'CP',
    signed: true,
    tbd: false,
    backup: false,
  },
  {
    name: 'Flavia Costa',
    title: 'Head of Product',
    company: 'Cielo',
    linkedin: 'https://www.linkedin.com/in/flavia-costa-003b7a128/',
    initials: 'FC',
    signed: false,
    tbd: false,
    backup: false,
  },
  {
    name: 'West Monroe',
    title: "Validated Maikon's data architecture at WineDirect as aligned with modern cloud best practices",
    company: 'Management Consulting',
    linkedin: 'https://www.linkedin.com/company/west-monroe-partners/',
    initials: '?',
    signed: false,
    tbd: true,
    backup: false,
  },
  {
    name: 'Jeff Carroll',
    title: 'Vice President of Partnerships',
    company: 'Commerce7',
    linkedin: 'https://www.linkedin.com/in/jpcarroll/',
    initials: 'JC',
    signed: false,
    tbd: true,
    backup: true,
  },
]

const dependent = [
  {
    name: 'Christopher Anthony',
    title: 'Application Developer Manager',
    company: 'Info-Tech Research Group',
    linkedin: 'https://www.linkedin.com/in/christopher-anthony-6a1a395',
    initials: 'CA',
    signed: true,
  },
  {
    name: 'Daniel Mills',
    title: 'Vice President of Software Engineering',
    company: 'Kuva BU · Sensirion Connected Solutions',
    linkedin: 'https://www.linkedin.com/in/danielmills/',
    initials: 'DM',
    signed: false,
  },
  {
    name: 'Ryan Hutchinson',
    title: 'Sr. Software Engineering Manager',
    company: 'General Motors',
    linkedin: 'https://www.linkedin.com/in/ryahutchinson/',
    initials: 'RH',
    signed: true,
  },
  {
    name: 'Taís Assad Della Santina',
    title: 'IT Executive · Head of Digital Transformation',
    company: 'CI&T',
    linkedin: 'https://www.linkedin.com/in/taisassad/',
    initials: 'TA',
    signed: true,
  },
]

const potentialDependent = [
  {
    name: 'Dan Popovic',
    title: 'Senior Software Engineer',
    company: 'General Motors',
    relationship: 'Former General Motors colleague',
    linkedin: 'https://www.linkedin.com/in/danpops',
    initials: 'DP',
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
    name: 'Saeid Vosoughi',
    title: 'Software Development Manager',
    company: 'Autodesk',
    relationship: 'Current manager',
    linkedin: 'https://www.linkedin.com/in/saeidv',
    initials: 'SV',
  },
  {
    name: 'Surabhi Potnis',
    title: 'Senior Engineering Manager',
    company: 'Narvar',
    relationship: 'Former WineDirect colleague',
    linkedin: 'https://www.linkedin.com/in/surabhipotnis/',
    initials: 'SP',
  },
]

const totalSigned = [...independent, ...dependent].filter((p) => p.signed).length
const totalNamed = independent.filter((p) => !p.tbd).length + dependent.length

export default function WhoHasSigned() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-800 to-navy-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-2xl mb-6">
              <Users className="w-7 h-7 text-emerald-300" />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-3">Social Proof</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-5">Who Has Signed</h1>
            <p className="text-xl text-emerald-100 leading-relaxed max-w-2xl mx-auto">
              {totalSigned} of {totalNamed} recommenders have signed so far.
              These are the professionals standing behind Maikon's petition.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Independent Recommenders */}
          <AnimatedSection className="mb-12">
            <h2 className="font-semibold text-navy-700 text-sm uppercase tracking-widest mb-1">Independent Recommenders</h2>
            <p className="text-slate-400 text-xs mb-5">Professionals who know Maikon's work but have no direct employment relationship with him — their letters carry additional weight with USCIS.</p>

            {/* Confirmed / pending */}
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {independent.filter((p) => !p.tbd).map((p) => (
                <a
                  key={p.name}
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative rounded-xl p-5 flex flex-col items-center text-center transition-all ${
                    p.signed
                      ? 'bg-emerald-50 border border-emerald-200 hover:shadow-md hover:border-emerald-300'
                      : 'bg-slate-50 border border-slate-200 hover:shadow-sm opacity-60 hover:opacity-80'
                  }`}
                >
                  <span className="absolute top-3 right-3 text-base">{p.signed ? '❤️' : '🙏'}</span>
                  <div className="relative mb-3">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg ${
                      p.signed ? 'bg-emerald-600 text-white' : 'bg-slate-300 text-slate-500'
                    }`}>
                      {p.initials}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      {p.signed
                        ? <CheckCircle className="w-4 h-4 text-emerald-500 fill-emerald-100" />
                        : <Clock className="w-3.5 h-3.5 text-slate-400" />}
                    </div>
                  </div>
                  <p className={`font-semibold text-sm leading-snug transition-colors ${
                    p.signed ? 'text-navy-800 group-hover:text-emerald-700' : 'text-slate-500'
                  }`}>{p.name}</p>
                  <p className={`text-xs mt-1 leading-snug ${p.signed ? 'text-slate-500' : 'text-slate-400'}`}>{p.title}</p>
                  <p className={`text-xs font-medium mt-1 ${p.signed ? 'text-emerald-600' : 'text-slate-400'}`}>{p.company}</p>
                </a>
              ))}
            </div>

            {/* West Monroe → Jeff Carroll fallback slot */}
            <div className="relative rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/40 p-4">
              <span className="absolute -top-3 left-4 bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-amber-600 border border-amber-200 rounded-full">
                Slot 3 — In Pursuit
              </span>
              <div className="flex flex-col sm:flex-row items-stretch gap-0">
                {(() => {
                  const wm = independent.find((p) => p.name === 'West Monroe')!
                  return (
                    <a
                      href={wm.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex-1 rounded-xl p-5 flex flex-col items-center text-center bg-amber-50 border border-amber-200 hover:shadow-sm hover:border-amber-300 transition-all"
                    >
                      <span className="text-base mb-2">❓</span>
                      <div className="w-14 h-14 rounded-full bg-amber-200 text-amber-600 flex items-center justify-center font-bold text-2xl mb-3">?</div>
                      <p className="font-semibold text-sm text-amber-700 leading-snug">{wm.name}</p>
                      <p className="text-xs mt-1 text-amber-600/70 leading-snug">{wm.title}</p>
                      <p className="text-xs font-medium mt-1 text-amber-500">{wm.company}</p>
                    </a>
                  )
                })()}

                <div className="flex sm:flex-col items-center justify-center px-1 py-3 sm:py-0 sm:px-2 gap-1 flex-shrink-0">
                  <div className="flex-1 sm:flex-none w-px sm:w-auto h-auto sm:h-px bg-amber-300 sm:hidden" />
                  <div className="flex flex-col items-center gap-0.5">
                    <ArrowRight className="w-5 h-5 text-amber-400 rotate-90 sm:rotate-0" />
                    <span className="text-[9px] font-semibold text-amber-500 uppercase tracking-wide text-center leading-tight">
                      if not<br className="hidden sm:block" /> available
                    </span>
                  </div>
                  <div className="flex-1 sm:flex-none w-px sm:w-auto h-auto sm:h-px bg-amber-300 sm:hidden" />
                </div>

                {(() => {
                  const jc = independent.find((p) => p.backup)!
                  return (
                    <a
                      href={jc.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex-1 rounded-xl p-5 flex flex-col items-center text-center bg-amber-50 border border-amber-200 hover:shadow-sm hover:border-amber-300 transition-all opacity-75 hover:opacity-100"
                    >
                      <span className="text-base mb-2">❓</span>
                      <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center font-bold text-lg mb-3">{jc.initials}</div>
                      <p className="font-semibold text-sm text-amber-700 leading-snug">{jc.name}</p>
                      <p className="text-xs mt-1 text-amber-600/70 leading-snug">{jc.title}</p>
                      <p className="text-xs font-medium mt-1 text-amber-500">{jc.company}</p>
                    </a>
                  )
                })()}
              </div>
            </div>
          </AnimatedSection>

          {/* Dependent Recommenders */}
          <AnimatedSection delay={0.1} className="mb-12">
            <h2 className="font-semibold text-navy-700 text-sm uppercase tracking-widest mb-1">Dependent Recommenders</h2>
            <p className="text-slate-400 text-xs mb-5">Colleagues and managers who have worked directly with Maikon and can speak to his professional contributions firsthand.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {dependent.map((p) => (
                <a
                  key={p.name}
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative rounded-xl p-5 flex flex-col items-center text-center transition-all ${
                    p.signed
                      ? 'bg-emerald-50 border border-emerald-200 hover:shadow-md hover:border-emerald-300'
                      : 'bg-slate-50 border border-slate-200 hover:shadow-sm opacity-60 hover:opacity-80'
                  }`}
                >
                  <span className="absolute top-3 right-3 text-base">{p.signed ? '❤️' : '🙏'}</span>
                  <div className="relative mb-3">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg ${
                      p.signed ? 'bg-emerald-600 text-white' : 'bg-slate-300 text-slate-500'
                    }`}>
                      {p.initials}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      {p.signed
                        ? <CheckCircle className="w-4 h-4 text-emerald-500 fill-emerald-100" />
                        : <Clock className="w-3.5 h-3.5 text-slate-400" />}
                    </div>
                  </div>
                  <p className={`font-semibold text-sm leading-snug transition-colors ${
                    p.signed ? 'text-navy-800 group-hover:text-emerald-700' : 'text-slate-500'
                  }`}>{p.name}</p>
                  <p className={`text-xs mt-1 leading-snug ${p.signed ? 'text-slate-500' : 'text-slate-400'}`}>{p.title}</p>
                  <p className={`text-xs font-medium mt-1 ${p.signed ? 'text-emerald-600' : 'text-slate-400'}`}>{p.company}</p>
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Potential Dependent Recommenders */}
          <AnimatedSection delay={0.2}>
            <div className="border border-slate-200 rounded-xl p-6 bg-white">
              <h3 className="font-display text-base font-bold text-navy-800 mb-1">Potential Dependent Recommenders</h3>
              <p className="text-slate-400 text-xs mb-5">People Maikon may reach out to if additional letters are needed to strengthen the case.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {potentialDependent.map((p) => (
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
