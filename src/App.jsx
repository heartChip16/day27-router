import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Route>
  </Routes>
}

function Layout() {
  return <>
    <header><nav><ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
    </ul></nav>
    </header>
    <main><Outlet></Outlet></main>
    <footer>This is the footer.</footer>
  </>
}

function Dashboard() {
  return <h1>This is dashboard.</h1>
}

function About() {
  return <h1>This is about page.</h1>
}

function Home() {
  return <h1>This is the home page.</h1>
}

export default App
