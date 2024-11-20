import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App/>
    </Router>
  </StrictMode>
)
