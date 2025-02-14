import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './Assets.tsx'

const container = document.createElement("div");
container.id = "widget";
document.body.appendChild(container);

createRoot(document.getElementById('widget')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
