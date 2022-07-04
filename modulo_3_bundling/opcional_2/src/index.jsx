import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';

import './styles.scss'

const App = () => { 

  const [count, setCount] = useState(0)

  const decrease = () => setCount(count - 1)
  const increase = () => setCount(count + 1)

  return (
    <div>
      <h1 className="title">Hola mundo</h1>
      <h1>Contador: {count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);