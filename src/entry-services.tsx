import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Services from './pages/Services';
import SharedLayout from './components/SharedLayout';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SharedLayout>
      <Services />
    </SharedLayout>
  </StrictMode>
);
