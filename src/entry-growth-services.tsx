import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GrowthServices from './pages/GrowthServices';
import SharedLayout from './components/SharedLayout';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SharedLayout>
      <GrowthServices />
    </SharedLayout>
  </StrictMode>
);
