import { useState } from 'react'
import tbgLogo from '/BracersGuildLogo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.youtube.com/@TheBracersGuild" target="_blank">
          <img src={tbgLogo} className="logo" alt="TBG Logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Coming Soon: Our website!
        </p>
      </div>
    </>
  )
}

export default App
