import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileSearch, ClipboardList, Send, Clock, CheckCircle2, Home } from 'lucide-react'

const steps = [
  {
    icon: <FileSearch className="w-6 h-6" />,
    phase: 'Phase 1',
    title: 'Petition Preparation',
    duration: '3–6 months',
    desc: 'The applicant (with an immigration attorney) builds the case: compiling evidence of their work, citations, publications, awards, and letters of recommendation from experts in the field.',
    color: 'navy',
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    phase: 'Phase 2',
    title: 'USCIS Filing (I-140)',
    duration: '1–2 weeks',
    desc: 'The petition is formally submitted to USCIS along with supporting evidence. A filing fee is paid. The wait begins.',
    color: 'indigo',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    phase: 'Phase 3',
    title: 'USCIS Review',
    duration: '8–24 months',
    desc: 'USCIS adjudicators review the entire case. They may issue a Request for Evidence (RFE) asking for clarification. The recommendation letters play a critical role here.',
    color: 'amber',
  },
  {
    icon: <Send className="w-6 h-6" />,
    phase: 'Phase 4',
    title: 'Adjustment of Status / Visa',
    duration: '6–18 months',
    desc: 'Once the I-140 is approved, the applicant either adjusts status inside the US (Form I-485) or goes through consular processing abroad.',
    color: 'emerald',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    phase: 'Phase 5',
    title: 'Biometrics & Interview',
    duration: '1–6 months',
    desc: 'USCIS collects biometrics (fingerprints, photos) and may schedule an interview to verify Maikon\'s application.',
    color: 'teal',
  },
  {
    icon: <Home className="w-6 h-6" />,
    phase: 'Phase 6',
    title: 'Green Card Issued',
    duration: 'Total: 2–5 years',
    desc: 'The Green Card arrives in the mail. Permanent residency is granted. A dream — years in the making — is finally realized.',
    color: 'crimson',
    highlight: true,
  },
]

const colorMap: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
  navy:    { bg: 'bg-navy-50',    border: 'border-navy-200',    icon: 'bg-navy-700 text-white',    badge: 'bg-navy-100 text-navy-700' },
  indigo:  { bg: 'bg-indigo-50',  border: 'border-indigo-200',  icon: 'bg-indigo-700 text-white',  badge: 'bg-indigo-100 text-indigo-700' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-200',   icon: 'bg-amber-500 text-white',   badge: 'bg-amber-100 text-amber-700' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'bg-emerald-600 text-white', badge: 'bg-emerald-100 text-emerald-700' },
  teal:    { bg: 'bg-teal-50',    border: 'border-teal-200',    icon: 'bg-teal-600 text-white',    badge: 'bg-teal-100 text-teal-700' },
  crimson: { bg: 'bg-red-50',     border: 'border-red-200',     icon: 'bg-crimson-500 text-white', badge: 'bg-red-100 text-crimson-600' },
}

function Step({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const c = colorMap[step.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex gap-4 md:gap-6"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center shadow-md flex-shrink-0 z-10`}>
          {step.icon}
        </div>
        {index < steps.length - 1 && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-slate-300 to-transparent mt-2 mb-0 min-h-[2rem]" />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 pb-8 ${step.highlight ? 'mb-0' : ''}`}>
        <div className={`${c.bg} ${c.border} border rounded-xl p-5 ${step.highlight ? 'ring-2 ring-crimson-400 ring-offset-2' : ''}`}>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.badge}`}>{step.phase}</span>
            <span className="text-xs text-slate-500">{step.duration}</span>
            {step.highlight && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-crimson-500 text-white">
                The Goal
              </span>
            )}
          </div>
          <h4 className="font-bold text-navy-800 text-lg mb-1">{step.title}</h4>
          <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProcessTimeline() {
  return (
    <div className="max-w-2xl mx-auto">
      {steps.map((step, i) => (
        <Step key={step.phase} step={step} index={i} />
      ))}
    </div>
  )
}
