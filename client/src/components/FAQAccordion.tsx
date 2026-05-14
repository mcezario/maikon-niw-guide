import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  q: string
  a: string
}

interface Props {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
            open === i ? 'border-navy-300 shadow-sm' : 'border-slate-200'
          }`}
        >
          <button
            className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-navy-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-navy-800 text-sm md:text-base">{item.q}</span>
            <motion.div
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-navy-600" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed bg-white border-t border-slate-100">
                  <div className="pt-4">{item.a}</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
