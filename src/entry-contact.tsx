import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Contact from './pages/Contact';
import SharedLayout from './components/SharedLayout';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SharedLayout>
      <Contact />
    </SharedLayout>
  </StrictMode>
);
