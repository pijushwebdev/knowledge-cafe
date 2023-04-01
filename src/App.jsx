import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'
import Questions from './components/Questions/Questions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container mx-auto">
      <Header></Header>
      <Blog></Blog>
      <Questions></Questions>
    </div>
  )
}

export default App
