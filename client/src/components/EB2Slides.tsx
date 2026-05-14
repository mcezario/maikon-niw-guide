import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Award, Globe, FileText, Users, CheckCircle } from 'lucide-react'

const slides = [
  {
    id: 1,
    icon: <Globe className="w-12 h-12 text-navy-600" />,
    title: 'What is the Green Card?',
    subtitle: 'The First Step Toward Permanent Life in the USA',
    content:
      'A Green Card (Permanent Resident Card) grants the right to live and work permanently in the United States. It is the pathway to citizenship and represents a life of stability, opportunity, and belonging in one of the most vibrant nations in the world.',
    highlight: 'Over 1 million Green Cards are issued annually — each one a life transformed.',
    color: 'from-navy-700 to-navy-900',
    bg: 'bg-navy-50',
  },
  {
    id: 2,
    icon: <Award className="w-12 h-12 text-gold-500" />,
    title: 'What is EB2 NIW?',
    subtitle: 'Employment-Based Second Preference — National Interest Waiver',
    content:
      'EB2 NIW is a special category that allows individuals with an advanced degree or exceptional ability to apply for a Green Card without needing an employer sponsor — if they can prove their work serves the national interest of the United States.',
    highlight: 'The NIW waives the usual job offer requirement, giving talented individuals direct access to permanent residency.',
    color: 'from-gold-500 to-gold-600',
    bg: 'bg-amber-50',
  },
  {
    id: 3,
    icon: <CheckCircle className="w-12 h-12 text-emerald-600" />,
    title: 'The Three Pillars of NIW',
    subtitle: 'Proving National Importance — The Legal Standard',
    bullets: [
      { label: 'Substantial Merit', desc: 'The proposed work has significant value in fields like science, technology, health, business, or education.' },
      { label: 'National Importance', desc: 'The work has broad potential impact — not just local, but at a national or global scale.' },
      { label: 'Well-Positioned to Advance', desc: 'The applicant has the education, skills, and record to successfully execute their goals.' },
    ],
    color: 'from-emerald-600 to-emerald-800',
    bg: 'bg-emerald-50',
  },
  {
    id: 4,
    icon: <FileText className="w-12 h-12 text-crimson-500" />,
    title: 'The Recommendation Letter',
    subtitle: 'Why Expert Voices Matter',
    content:
      'USCIS (U.S. Citizenship and Immigration Services) gives significant weight to letters from qualified professionals who know the applicant\'s work. These letters serve as independent expert testimony — corroborating that the applicant\'s contributions are real, impactful, and nationally important.',
    highlight: 'A strong recommendation letter can be the difference between approval and denial.',
    color: 'from-crimson-500 to-crimson-700',
    bg: 'bg-red-50',
  },
  {
    id: 5,
    icon: <Users className="w-12 h-12 text-indigo-600" />,
    title: 'What You Are Asked to Do',
    subtitle: 'A Small Act With an Enormous Impact',
    bullets: [
      { label: 'Write or review a letter', desc: 'Confirm facts about the applicant\'s professional contributions and your expert opinion of their work\'s importance.' },
      { label: 'No legal risk to you', desc: 'Recommendation letters carry no legal liability. You are simply offering your professional perspective.' },
      { label: 'One signature, one life', desc: 'Your signature supports someone\'s dream of building a future in the United States.' },
    ],
    color: 'from-indigo-600 to-indigo-800',
    bg: 'bg-indigo-50',
  },
]

export default function EB2Slides() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }
  const prev = () => go((current - 1 + slides.length) % slides.length)
  const next = () => go((current + 1) % slides.length)

  const slide = slides[current]

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-2xl shadow-2xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={{
              enter: (d: number) => ({ x: d > 0 ? 400 : -400, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d > 0 ? -400 : 400, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className={`${slide.bg} min-h-[420px] p-8 md:p-12`}
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center">
                {slide.icon}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
                  Slide {slide.id} of {slides.length}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-navy-800 mb-1">
                  {slide.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base">{slide.subtitle}</p>
              </div>

              {slide.content && (
                <p className="text-slate-700 leading-relaxed max-w-xl">{slide.content}</p>
              )}

              {slide.bullets && (
                <ul className="w-full max-w-xl space-y-3 text-left">
                  {slide.bullets.map((b) => (
                    <li key={b.label} className="flex gap-3 bg-white/70 rounded-xl p-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-navy-800">{b.label}: </span>
                        <span className="text-slate-600 text-sm">{b.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {slide.highlight && (
                <div className={`w-full max-w-xl bg-gradient-to-r ${slide.color} rounded-xl p-4 text-white text-sm font-medium`}>
                  {slide.highlight}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-navy-700 hover:bg-navy-800 text-white flex items-center justify-center transition-colors shadow"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? 'w-6 h-3 bg-navy-700' : 'w-3 h-3 bg-navy-200 hover:bg-navy-400'
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-navy-700 hover:bg-navy-800 text-white flex items-center justify-center transition-colors shadow"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
