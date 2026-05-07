import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Workshops from './pages/Workshops'
import Stock from './pages/Stock'
import Rates from './pages/Rates'
import Presenting from './pages/Presenting'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import CustomCursor from './components/CustomCursor'
import FilmGrain from './components/FilmGrain'
import { PUBLISHED_ROUTES } from './config/featureFlags'

/** Renders the page component if the route is published, otherwise redirects to /home */
function Gate({ flag, children }: { flag: boolean; children: React.ReactNode }) {
  return flag ? <>{children}</> : <Navigate to="/home" replace />
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <FilmGrain />
      <Routes>
        {/* Root now renders Home directly */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/workshops" element={<Gate flag={PUBLISHED_ROUTES.workshops}><Workshops /></Gate>} />
        <Route path="/stock" element={<Gate flag={PUBLISHED_ROUTES.stock}><Stock /></Gate>} />
        <Route path="/rates" element={<Gate flag={PUBLISHED_ROUTES.rates}><Rates /></Gate>} />
        <Route path="/presenting" element={<Gate flag={PUBLISHED_ROUTES.presenting}><Presenting /></Gate>} />
        <Route path="/blog" element={<Gate flag={PUBLISHED_ROUTES.blog}><Blog /></Gate>} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all: redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  )
}







