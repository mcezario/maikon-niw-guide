import { useEffect } from 'react'
import Home from './Home'
import WhatIsEB2 from './WhatIsEB2'
import WhySign from './WhySign'
import WhoHasSigned from './WhoHasSigned'
import ProcessPage from './ProcessPage'
import FAQ from './FAQ'
import Endeavor from './Endeavor'
import SignLetter from './SignLetter'

const SECTION_IDS = ['home', 'what-is-eb2', 'why-sign', 'who-has-signed', 'process', 'faq', 'endeavor', 'sign']

export default function ScrollPage() {
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash && hash !== 'home') {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'instant' })
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const newUrl = id === 'home' ? '/' : `/#${id}`
            const currentUrl = window.location.pathname + window.location.hash
            if (currentUrl !== newUrl) {
              window.history.replaceState(null, '', newUrl)
              window.dispatchEvent(new CustomEvent('scrollspy'))
            }
          }
        }
      },
      { rootMargin: '-64px 0px -55% 0px', threshold: 0 }
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="what-is-eb2" className="scroll-mt-16">
        <WhatIsEB2 />
      </section>
      <section id="why-sign" className="scroll-mt-16">
        <WhySign />
      </section>
      <section id="who-has-signed" className="scroll-mt-16">
        <WhoHasSigned />
      </section>
      <section id="process" className="scroll-mt-16">
        <ProcessPage />
      </section>
      <section id="faq" className="scroll-mt-16">
        <FAQ />
      </section>
      <section id="endeavor" className="scroll-mt-16">
        <Endeavor />
      </section>
      <section id="sign" className="scroll-mt-16">
        <SignLetter />
      </section>
    </>
  )
}
