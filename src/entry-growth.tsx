import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Growth from './pages/Growth';
import SharedLayout from './components/SharedLayout';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SharedLayout>
      <Growth />
    </SharedLayout>
  </StrictMode>
);
