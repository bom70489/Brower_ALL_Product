import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './Context/AppContext.tsx';
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </AppProvider>
  </BrowserRouter>,
)
