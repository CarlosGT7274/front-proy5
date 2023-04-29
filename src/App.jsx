import { React } from 'react'
import IndexLayout from './components/layouts'

function App() {
  const content = (
    <div>
      <h1>hola</h1>
    </div>
  )


  return (
    <IndexLayout render={content} />
  )}

export default App
