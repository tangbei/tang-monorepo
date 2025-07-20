import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import { router } from './routes';

const BrowserRouterContent = () => {
  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouterContent />
  </StrictMode>,
);