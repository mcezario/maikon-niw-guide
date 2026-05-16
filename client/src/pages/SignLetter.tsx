import { motion } from 'framer-motion'
import { Clock, FileText, MessageCircle, Mail, Heart } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const steps = [
  {
    number: '01',
    icon: <FileText className="w-5 h-5" />,
    title: 'Review the letter Maikon sent you',
    desc: "Read through the recommendation letter Maikon has already shared with you. If anything needs to be changed — a word, a sentence, a detail — just let him know and he'll update it. Alternatively, Maikon can share the document via Google Docs so you can make edits directly, however you prefer.",
  },
  {
    number: '02',
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Tell Maikon you're happy with it",
    desc: "Once you've reviewed the letter and it accurately reflects your professional opinion, simply let Maikon know you're good to go. He'll then take care of uploading the final version to DocuSign and sending you the signing request.",
  },
  {
    number: '03',
    icon: <Mail className="w-5 h-5" />,
    title: 'Sign via the DocuSign email',
    desc: "You'll receive an email from DocuSign with a link to sign the letter electronically. Click the link, follow the steps on their website, and add your signature. It takes just a few minutes — no account required.",
  },
  {
    number: '04',
    icon: <Heart className="w-5 h-5" />,
    title: "You're done — enjoy the feeling",
    desc: "That's it. Your signature is now part of Maikon's petition to build a life in the United States. What you just did means more than you know — you've helped turn years of hard work and sacrifice into something real. Thank you.",
  },
]

export default function SignLetter() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-white/70 text-xs font-medium tracking-wide uppercase mb-8">
              <Clock className="w-3.5 h-3.5" />
              About 30 minutes in total
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5">
              How to Sign the Letter
            </h1>
            <p className="text-navy-300 text-lg leading-relaxed">
              Four simple steps. No complex forms, no special software —
              just your honest professional opinion and a few minutes of your time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-2xl mx-auto px-6">
          <div className="space-y-4">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className="bg-white border border-slate-200 rounded-xl p-7 flex gap-6 shadow-sm">
                  {/* Left column */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-2 pt-1">
                    <div className="w-9 h-9 rounded-full bg-navy-900 text-white flex items-center justify-center">
                      {step.icon}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-slate-200 min-h-[1.5rem]" />
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-1.5">
                      Step {step.number}
                    </p>
                    <h3 className="font-display text-xl font-bold text-navy-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-[15px]">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Closing note */}
          <AnimatedSection delay={0.5} className="mt-10">
            <div className="bg-navy-900 rounded-xl p-10 text-center">
              <Heart className="w-8 h-8 text-crimson-500 fill-crimson-500 mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Thank You for Being Here
              </h3>
              <p className="text-navy-300 leading-relaxed max-w-lg mx-auto text-[15px]">
                The fact that you're reading this page means the world to Maikon. If you have
                any questions at any point, don't hesitate to reach out to him directly.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
