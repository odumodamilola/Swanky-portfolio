import { Routes, Route } from 'react-router-dom'
import Splash from './pages/Splash'
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

export default function App() {
  return (
    <>
      <CustomCursor />
      <FilmGrain />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/presenting" element={<Presenting />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

