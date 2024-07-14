// import { useState } from 'react'
import tbgLogo from '/BracersGuildLogo.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://www.youtube.com/@TheBracersGuild" target="_blank">
          <img src={tbgLogo} className="logo" alt="TBG Logo" />
        </a>
      </div>
      <h1>The Bracers Guild</h1>
      <div className="card">
        <p>
          Coming Soon: Our website!
        </p>
      </div>
    </>
  )
}

export default App
