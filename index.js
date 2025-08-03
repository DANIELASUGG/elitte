
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-red-600 text-white flex flex-col items-center justify-center">
      <img src="/salto_alto_preto_vermelho.png" alt="Salto Alto" className="w-32 h-32 mb-4" />
      <h1 className="text-5xl font-extrabold mb-2">Sugar Elite</h1>
      <p className="text-xl max-w-xl text-center">O site sugar daddy pago, completo, seguro e sofisticado.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
