import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatbotButton from './components/ChatbotButton';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Growth from './pages/Growth';
import Contact from './pages/Contact';
import SpecialGuests from './pages/SpecialGuests';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white selection:bg-teal-100 selection:text-teal-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/growth" element={<Growth />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/special-guests" element={<SpecialGuests />} />
          </Routes>
        </main>
        <Footer />
        <ChatbotButton />
      </div>
    </Router>
  );
}
