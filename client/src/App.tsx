import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WhatIsEB2 from './pages/WhatIsEB2'
import WhySign from './pages/WhySign'
import ProcessPage from './pages/ProcessPage'
import FAQ from './pages/FAQ'
import SignLetter from './pages/SignLetter'
import Endeavor from './pages/Endeavor'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-is-eb2" element={<WhatIsEB2 />} />
            <Route path="/why-sign" element={<WhySign />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/sign" element={<SignLetter />} />
            <Route path="/endeavor" element={<Endeavor />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </BrowserRouter>
  )
}
