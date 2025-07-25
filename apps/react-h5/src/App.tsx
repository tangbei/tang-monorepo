import { useState } from 'react';
import '@tang/styles/index.css';
import { demoTest } from '@tang/utils';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import './assets/style/app.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="testss">Vite + React</h1>
      <div className="card">
        <button className='common-button' onClick={() => setCount((count) => count + 1)}>
          count is {count} {demoTest('tangbei')}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
