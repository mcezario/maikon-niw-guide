import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import ProcessTimeline from '../components/ProcessTimeline'

export default function ProcessPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-800 to-navy-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-3">Step by Step</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-5">
              The EB2 NIW Process
            </h1>
            <p className="text-xl text-indigo-200 leading-relaxed max-w-3xl mx-auto">
              From the first document to the final Green Card — a journey that can take years,
              and requires the trust and support of people like you along the way.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-navy-800 mb-4">Six Phases, One Dream</h2>
            <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Understanding the full scope of the EB2 NIW process helps you appreciate
              what the applicant has already gone through — and what still lies ahead.
            </p>
          </AnimatedSection>
          <ProcessTimeline />

          {/* Where recommenders fit */}
          <AnimatedSection delay={0.1} className="mt-16">
            <div className="bg-gold-50 border border-gold-200 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-navy-800 mb-4">
                Where You Fit In: Phase 1
              </h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Recommendation letters are collected during <strong>Phase 1 — Petition Preparation</strong>.
                This is when the applicant and their attorney are building the complete case to submit
                to USCIS. Your letter becomes a permanent part of the I-140 petition package.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {[
                  { label: 'When needed', value: 'Before USCIS filing (Phase 2)' },
                  { label: 'How many letters', value: 'Typically 3–6 recommenders' },
                  { label: 'Impact', value: 'Directly influences USCIS decision' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white rounded-xl p-4 border border-gold-100">
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">{label}</p>
                    <p className="font-semibold text-navy-800">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Timeline perspective */}
          <AnimatedSection delay={0.2} className="mt-12">
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-navy-800 mb-4">
                The Weight of the Wait
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                The total journey from petition filing to Green Card can take anywhere from
                2 to 5 years or more. During this time, applicants may face visa status uncertainty,
                travel restrictions, and the constant anxiety of an unresolved immigration case.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Recommendation letters are one of the few pieces of the process that can
                actually be strengthened by human action — your action. Every other aspect
                is in the hands of bureaucracy. Your voice is in your hands.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-12 text-center">
            <Link to="/faq" className="btn-primary mr-4">
              Common Questions <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/sign" className="btn-secondary">
              Sign the Letter
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
