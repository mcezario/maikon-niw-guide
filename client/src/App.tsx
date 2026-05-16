import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollPage from './pages/ScrollPage'

function HashRedirect({ hash }: { hash: string }) {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(`/#${hash}`, { replace: true })
  }, [hash, navigate])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<ScrollPage />} />
            <Route path="/what-is-eb2" element={<HashRedirect hash="what-is-eb2" />} />
            <Route path="/why-sign" element={<HashRedirect hash="why-sign" />} />
            <Route path="/process" element={<HashRedirect hash="process" />} />
            <Route path="/faq" element={<HashRedirect hash="faq" />} />
            <Route path="/endeavor" element={<HashRedirect hash="endeavor" />} />
            <Route path="/sign" element={<HashRedirect hash="sign" />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </BrowserRouter>
  )
}
