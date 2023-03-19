import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculator from './Calculator'
import './index.css'

ReactDOM.createRoot(document.getElementsByTagName('main')[0] as HTMLElement).render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
)
