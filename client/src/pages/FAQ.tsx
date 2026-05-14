import { Link } from 'react-router-dom'
import { ArrowRight, HelpCircle } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import FAQAccordion from '../components/FAQAccordion'

const faqGroups = [
  {
    title: 'About EB2 NIW',
    items: [
      {
        q: 'What does NIW stand for and why is it a "waiver"?',
        a: 'NIW stands for National Interest Waiver. Normally, employment-based green cards require a U.S. employer to sponsor the applicant and go through a process called PERM labor certification (proving no qualified U.S. worker is available). The NIW waives those requirements entirely — the applicant can petition for themselves, without an employer, if they can prove their work benefits the national interest.',
      },
      {
        q: 'Is this the same as an EB1 Extraordinary Ability visa?',
        a: 'No. EB1A requires an extremely high standard of "extraordinary ability" — essentially being at the very top of your field nationally or internationally. EB2 NIW is more accessible: it requires an advanced degree or exceptional ability plus proof that your work is nationally important. Both are self-petition categories, but the NIW is available to a wider range of accomplished professionals.',
      },
      {
        q: 'How long does the entire process take?',
        a: 'The full journey varies significantly based on the applicant\'s country of birth (due to visa backlogs). For most nationalities, the I-140 petition takes 6–18 months to be adjudicated by USCIS, after which the applicant can adjust status or apply for an immigrant visa. For applicants from India or China, the wait for a visa number can extend to many additional years. The total process commonly ranges from 2 to 5+ years.',
      },
      {
        q: 'Does the applicant need to be in the US to file?',
        a: 'Not necessarily. The I-140 petition can be filed regardless of where the applicant is located. However, the final step — adjusting status (if inside the US) or obtaining an immigrant visa (if outside the US) — does depend on their physical location.',
      },
    ],
  },
  {
    title: 'About the Recommendation Letter',
    items: [
      {
        q: 'What is USCIS looking for in a recommendation letter?',
        a: 'USCIS wants letters that are specific, credible, and independent. The best letters: (1) describe how the recommender knows the applicant and in what capacity, (2) speak in detail about the applicant\'s contributions and their significance, (3) offer the recommender\'s professional opinion on the national importance of the work, and (4) are written on official letterhead and signed with professional credentials.',
      },
      {
        q: 'What should NOT be in the letter?',
        a: 'USCIS discounts letters that are vague, generic, or read as form letters. Letters that only say "this is a great person" without specifics about their work, citations, or impact are considered weak evidence. The letter should focus on the applicant\'s professional contributions, not their personal character.',
      },
      {
        q: 'Can I sign a letter even if I don\'t know them personally?',
        a: 'Yes. In fact, USCIS gives extra weight to letters from recommenders who do not know the applicant personally — these "independent" letters demonstrate that the recognition of the applicant\'s work extends beyond their immediate network. If you know their work through publications, conferences, industry reputation, or citations, that is sufficient.',
      },
      {
        q: 'The applicant drafted the letter for me. Is that normal?',
        a: 'Yes, this is standard practice and widely accepted. In immigration law, attorneys often draft recommendation letters for the recommender\'s review. You should read the draft carefully, ensure everything is accurate based on your own knowledge, make any changes needed, and then sign it. You should only sign a letter you agree with and that accurately reflects your professional opinion.',
      },
      {
        q: 'What if I disagree with some parts of the draft?',
        a: 'Simply tell the applicant or their attorney which parts you\'d like to change. Your letter must reflect your honest perspective. Recommenders are encouraged to adjust any language they find inaccurate, overstated, or inconsistent with their actual opinion. The final signed letter should be 100% true to your view.',
      },
    ],
  },
  {
    title: 'Your Risks & Responsibilities',
    items: [
      {
        q: "Am I legally liable if Maikon's application contains false information?",
        a: 'Only if YOU knowingly provide false information. If you sign a letter that accurately reflects your professional knowledge and honest opinion, you have no legal liability. Recommenders are witnesses sharing expert perspective — not sponsors or guarantors.',
      },
      {
        q: 'Will signing this letter affect my own immigration status?',
        a: 'No. Your immigration status (if applicable) is completely separate from any letter you sign in support of someone else\'s petition. Recommendation letters have no effect on the recommender\'s own visa, status, or citizenship.',
      },
      {
        q: 'What if USCIS contacts me about the letter?',
        a: 'This is extremely rare. USCIS almost never contacts recommenders directly. In the unlikely event they do, simply confirm what you wrote in the letter. There is no legal risk in doing so.',
      },
      {
        q: 'Can I withdraw my recommendation later?',
        a: 'Technically yes, though the letter may already be part of a submitted petition. If you have serious concerns about information in the letter, speak with the applicant immediately. In practice, withdrawals are extremely rare and would likely have minimal effect on an already-submitted petition.',
      },
    ],
  },
]

export default function FAQ() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-teal-800 to-navy-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <HelpCircle className="w-12 h-12 text-teal-300 mx-auto mb-4" />
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-5">
              Common Questions
            </h1>
            <p className="text-xl text-teal-200 leading-relaxed max-w-3xl mx-auto">
              Every concern you might have — answered clearly, honestly, and in plain English.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {faqGroups.map((group, gi) => (
            <AnimatedSection key={group.title} delay={gi * 0.1} className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy-800 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-navy-100 rounded-lg flex items-center justify-center text-navy-700 font-bold text-sm">
                  {gi + 1}
                </span>
                {group.title}
              </h2>
              <FAQAccordion items={group.items} />
            </AnimatedSection>
          ))}

          <AnimatedSection delay={0.2} className="mt-8 text-center bg-navy-50 rounded-2xl p-8">
            <h3 className="font-bold text-navy-800 text-lg mb-2">Still Have Questions?</h3>
            <p className="text-slate-600 text-sm mb-6">
              The applicant and their attorney are available to answer any specific concerns you might have.
              Don't hesitate to reach out before signing.
            </p>
            <Link to="/sign" className="btn-primary">
              Proceed to Sign the Letter <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
