import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { MedicoProvider } from './UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MedicoProvider>
      <App />
    </MedicoProvider>
  </StrictMode>,
)
