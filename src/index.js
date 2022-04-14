import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import crearRutas from './Routes/rutas';

const rutas = crearRutas();

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(rutas,  <App />);
root.render(<App />);
root.render(rutas);

//con react <18

// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
