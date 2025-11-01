import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PowerGridProvider } from './Context/GraphContext.jsx'

createRoot(document.getElementById('root')).render(
 <PowerGridProvider>
  <App/>
 </PowerGridProvider>
)
