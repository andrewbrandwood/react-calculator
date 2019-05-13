import React from 'react';
import Button from './components/buttons/button.js';

function App() {
  return (
    <div className="calculator">
      <header className="calculator__header">
        <h1>Equal Experts Calculator</h1>
      </header>
      <div className="calculator">
        <div className="grid button-container">
          <div className="grid__item">
            {Button({
              btnText: '1',
              className: 'btn-primary'
              })
            }
          </div>
          <div className="grid__item">
            {Button({
              btnText: '2',
              className: 'btn-primary'
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
