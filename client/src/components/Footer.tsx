import { Star, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-gradient-to-br from-navy-400 to-crimson-500 rounded-lg flex items-center justify-center">
                <Star className="w-3.5 h-3.5 text-white fill-white" />
              </div>
              <span className="font-display font-bold text-lg">EB2 NIW Guide</span>
            </div>
            <p className="text-navy-200 text-sm leading-relaxed">
              A resource to help recommenders understand the EB2 National Interest Waiver process
              and the impact of their support.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-navy-100 mb-3">Learn More</h4>
            <ul className="space-y-2 text-sm">
              {[
                { hash: 'what-is-eb2', label: 'What is EB2 NIW?' },
                { hash: 'why-sign', label: 'Why Sign?' },
                { hash: 'who-has-signed', label: 'Who Has Signed' },
                { hash: 'process', label: 'The Process' },
                { hash: 'faq', label: 'Common Questions' },
              ].map(({ hash, label }) => (
                <li key={hash}>
                  <a href={`/#${hash}`} className="text-navy-300 hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-navy-100 mb-3">Ready to Help?</h4>
            <p className="text-navy-300 text-sm mb-4 leading-relaxed">
              Your signature on the recommendation letter is a powerful act of support that can
              truly change a life.
            </p>
            <a href="/#sign" className="btn-secondary text-sm py-2">
              Sign the Letter
            </a>
          </div>
        </div>

        <div className="border-t border-navy-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-navy-400 text-xs">
          <p>This website is for educational purposes about Maikon's EB2 NIW process.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-crimson-500 fill-crimson-500" /> and hope
          </p>
        </div>
      </div>
    </footer>
  )
}
