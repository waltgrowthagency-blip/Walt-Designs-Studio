import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import About from './pages/About';
import SharedLayout from './components/SharedLayout';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SharedLayout>
      <About />
    </SharedLayout>
  </StrictMode>
);
