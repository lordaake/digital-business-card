import { useState } from 'react'
import './App.css'
import Footer from "./Components/Footer"
import Main from "./Components/Main"
import Header from "./Components/Header"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
