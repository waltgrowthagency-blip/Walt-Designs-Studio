import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SpecialGuests from './pages/SpecialGuests';
import SharedLayout from './components/SharedLayout';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SharedLayout>
      <SpecialGuests />
    </SharedLayout>
  </StrictMode>
);
