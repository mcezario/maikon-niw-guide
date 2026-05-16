import { motion } from 'framer-motion'
import { ArrowRight, Star, Shield, Clock, Heart } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import EB2Slides from '../components/EB2Slides'

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-crimson-700" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        {/* Stars pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Star
              key={i}
              className="absolute text-white/10 fill-white/10"
              style={{
                width: Math.random() * 16 + 8,
                height: Math.random() * 16 + 8,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-8"
          >
            <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
            EB2 National Interest Waiver — Understanding the Journey
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow-lg leading-tight"
          >
            Help Shape an{' '}
            <span className="text-gold-400">American Dream</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            You've been asked to sign a recommendation letter for Maikon — a software developer
            whose work is making a real difference. That one act of support could be the defining
            moment in his journey toward a better life in the United States.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#what-is-eb2" className="btn-secondary text-base py-3.5 px-8">
              Learn About EB2 NIW
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#sign" className="btn-outline text-base py-3.5 px-8">
              Sign the Letter
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 grid sm:grid-cols-2 gap-4"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
              <iframe
                src="https://www.youtube.com/embed/ExE-HymGlJ4"
                title="What is EB2 NIW?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
              <iframe
                src="https://www.youtube.com/embed/p2W4Fwa09Ws"
                title="EB2 NIW explained"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 flex justify-center"
          >
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white/60 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* READ TIME */}
      <section className="bg-navy-900 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-navy-300 text-sm uppercase tracking-widest font-medium mb-1">This website is a</p>
          <p className="font-display text-3xl font-bold text-white">15-minute read</p>
          <p className="text-navy-400 text-sm mt-1">Everything you need to know, start to finish.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-navy-100 to-crimson-100 rounded-3xl -z-10" />
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
                  alt="Signing a document"
                  className="rounded-2xl shadow-xl w-full object-cover h-72 md:h-96"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <p className="text-xs font-bold uppercase tracking-widest text-crimson-500 mb-3">Why You're Here</p>
              <h2 className="section-title mb-4">
                You Were Chosen for a Reason
              </h2>
              <p className="section-subtitle mb-4">
                Maikon has trusted you enough to ask for your support on one of the most important
                moments of his life.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Maikon is a software developer with a record of meaningful technical contributions.
                The EB2 National Interest Waiver process asks applicants to prove that their work
                benefits the United States at a national level — and the people best positioned to
                vouch for that are experts like you.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: <Shield className="w-5 h-5 text-navy-600" />, text: 'No legal liability for recommenders' },
                  { icon: <Clock className="w-5 h-5 text-gold-500" />, text: 'Takes less than 30 minutes to review and sign' },
                  { icon: <Heart className="w-5 h-5 text-crimson-500" />, text: 'An act of kindness that lasts a lifetime' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    {icon} {text}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SLIDES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-navy-500 mb-3">Understanding the Process</p>
            <h2 className="section-title mb-4">The EB2 NIW Explained</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Five slides. Everything you need to understand what this visa category is, why it exists,
              and what your role as a recommender means.
            </p>
          </AnimatedSection>
          <EB2Slides />
        </div>
      </section>

      {/* EMOTIONAL CTA */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <p className="font-sans text-2xl md:text-3xl font-light text-white leading-relaxed mb-8 tracking-wide">
              "The land of the free only stays free because someone, somewhere,
              believed in someone else enough to open the door."
            </p>
            <p className="text-navy-300 mb-10 text-lg">
              Your signature doesn't just support a visa application. It supports a person's
              courage, their years of sacrifice, and their belief that hard work and dedication
              can earn them a place to call home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#why-sign" className="btn-secondary">
                Why Your Signature Matters
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#sign" className="btn-outline">
                I'm Ready to Sign
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title mb-4">Explore to Learn More</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Still have questions? We've prepared detailed guides for every concern.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { hash: 'what-is-eb2', label: 'What is EB2 NIW?', desc: 'The full breakdown of this visa category and who qualifies.' },
              { hash: 'why-sign', label: 'Why Sign?', desc: 'Understand the impact your recommendation has on a real person\'s future.' },
              { hash: 'process', label: 'The Process', desc: 'Step-by-step timeline from petition to Green Card.' },
              { hash: 'faq', label: 'Common Questions', desc: 'Answers to every concern a recommender might have.' },
            ].map(({ hash, label, desc }, i) => (
              <AnimatedSection key={hash} delay={i * 0.1}>
                <a href={`#${hash}`} className="card group h-full flex flex-col gap-3 hover:border-navy-200 border border-transparent">
                  <h3 className="font-bold text-navy-800 group-hover:text-navy-600 transition-colors">{label}</h3>
                  <p className="text-slate-500 text-sm flex-1">{desc}</p>
                  <div className="flex items-center gap-1 text-navy-600 text-sm font-medium group-hover:gap-2 transition-all">
                    Scroll to section <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
