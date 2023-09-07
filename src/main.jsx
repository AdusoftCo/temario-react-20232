import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'

const Saludo = (props) => {
  console.log(props);

  return 'Hola ${props.nombre}';
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
