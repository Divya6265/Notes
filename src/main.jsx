import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import MyProvider  from "./ContextProvider";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <MyProvider>
       <App />
   </MyProvider>
  </StrictMode>,
)
