import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './context/LanguageProvider.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <LanguageProvider>
      <CartProvider>

    <App />
      </CartProvider>
    </LanguageProvider>
  </StrictMode>
  </BrowserRouter>
)
