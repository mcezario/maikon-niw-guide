import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, Award, Cloud, Database, Code2, CheckCircle } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const experience = [
  {
    company: 'Autodesk',
    role: 'Senior Software Engineer',
    type: 'Current',
    desc: 'Fortune 500 global leader in Architecture, Engineering, and Construction (AEC) software. Designs and operates high-throughput cloud data services leveraging AWS (RDS, ECS, ElastiCache, SQS).',
    tags: ['AWS RDS', 'AWS ECS', 'ElastiCache', 'SQS'],
  },
  {
    company: 'General Motors',
    role: 'Senior Software Engineer',
    type: 'Former',
    desc: 'Vehicle Data Cloud team. Built secure microservices managing control and data planes for millions of connected vehicles worldwide.',
    tags: ['Azure Service Bus', 'Spring Boot', 'Azure CosmosDB'],
  },
  {
    company: 'WineDirect',
    role: 'Senior Software Engineer',
    type: 'Former',
    desc: 'Led the design of the company\'s entire event-driven data architecture, independently validated by West Monroe consulting as aligned with modern cloud best practices.',
    tags: ['Apache Kafka', 'AWS MSK', 'AWS Glue', 'Apache Spark', 'Kubernetes/EKS'],
  },
  {
    company: 'Tasktop Technologies',
    role: 'Senior Software Engineer',
    type: 'Former',
    desc: 'Value Stream Management platform serving Fortune 100 enterprise clients.',
    tags: ['Java', 'Spring Boot', 'Keycloak SSO'],
  },
  {
    company: 'CI&T',
    role: 'Software Engineer',
    type: 'Former',
    desc: 'Scalable home banking and e-commerce microservices infrastructure for large enterprise clients.',
    tags: ['Java', 'Kafka', 'ELK', 'Spring Cloud'],
  },
]

const certifications = [
  { label: '4× AWS Professional Certifications', year: '2022–2024', icon: <Cloud className="w-4 h-4" /> },
  { label: '4× Oracle Java Enterprise Certifications', year: '2011–2016', icon: <Code2 className="w-4 h-4" /> },
  { label: 'B.S. Information Systems — Faculdades Integradas Claretianas, Brazil', year: '2009', icon: <Award className="w-4 h-4" /> },
]

export default function Endeavor() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-navy-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">EB2 NIW Petition</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Maikon's Proposed Endeavor
            </h1>
            <p className="text-navy-300 text-lg leading-relaxed max-w-3xl">
              The design, development, and advancement of scalable cloud-native infrastructure,
              event-driven distributed systems, and real-time data processing architectures that
              underpin mission-critical digital platforms across U.S. industries.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Endeavor detail */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Database className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">Scope of Work</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Mr. Cezario's proposed endeavor encompasses industries including{' '}
                  <span className="font-semibold text-navy-800">automotive technology</span>,{' '}
                  <span className="font-semibold text-navy-800">AEC software</span>,{' '}
                  <span className="font-semibold text-navy-800">enterprise digital commerce</span>, and{' '}
                  <span className="font-semibold text-navy-800">financial systems</span>.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  His work directly supports U.S. innovation, economic competitiveness, and the
                  reliability of systems serving millions of Americans.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="w-5 h-5 text-navy-700" />
              <h2 className="font-display text-2xl font-bold text-navy-900">Professional Experience</h2>
            </div>
            <p className="text-slate-500 text-sm">
              Over 15 years of progressive experience designing and implementing scalable cloud-native systems,
              event-driven distributed architectures, and real-time data processing platforms.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {experience.map((job, i) => (
              <AnimatedSection key={job.company} delay={i * 0.08}>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex gap-5">
                  <div className="flex-shrink-0 pt-1">
                    <div className={`w-2.5 h-2.5 rounded-full mt-1.5 ${job.type === 'Current' ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <h3 className="font-bold text-navy-900">{job.company}</h3>
                      {job.type === 'Current' && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 text-sm mb-3">{job.role}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">{job.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {job.tags.map(tag => (
                        <span key={tag} className="text-[11px] font-medium bg-navy-50 text-navy-700 border border-navy-100 rounded-full px-2.5 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="mb-8">
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-1">Credentials</h2>
            <p className="text-slate-500 text-sm">
              Sustained credential-level expertise spanning over a decade.
            </p>
          </AnimatedSection>
          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <AnimatedSection key={cert.label} delay={i * 0.08}>
                <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4">
                  <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-navy-800 text-sm">{cert.label}</p>
                  </div>
                  <p className="text-slate-400 text-xs font-medium flex-shrink-0">{cert.year}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Your Letter Makes This Case Stronger
            </h3>
            <p className="text-navy-300 leading-relaxed mb-8 max-w-xl mx-auto">
              Maikon's technical record speaks for itself — but USCIS needs to hear it from
              experts like you. Your professional voice is the bridge between his work and his future.
            </p>
            <Link to="/sign" className="btn-secondary">
              See How to Sign <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
