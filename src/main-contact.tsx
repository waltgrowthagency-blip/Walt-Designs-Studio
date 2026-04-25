import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col min-h-screen bg-white selection:bg-teal-100 selection:text-teal-900 font-sans">
      <Navbar />
      <main className="flex-grow">
        <Contact />
      </main>
      <Footer />
    </div>
  </StrictMode>,
);
