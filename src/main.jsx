import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HashRouter as Router} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <Router basename={"github-pages-test"}>
    <StrictMode>
      <App/>
    </StrictMode>
  </Router>
)
