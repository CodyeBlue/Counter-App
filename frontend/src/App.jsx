import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <div className="counter-card">
        <h2 className="title">Accountant</h2>
        
        <p className={`num ${count > 0 ? 'positive' : count < 0 ? 'negative' : ''}`}>{count}
        </p>
        <div className="buttons">
          <button onClick={decrease} className="btn btn-minus" aria-label="decrease"> -
          </button>
          <button onClick={reset} className="btn btn-reset"> Reset
          </button>
          <button onClick={increase} className="btn btn-plus" aria-label="increase"> +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
