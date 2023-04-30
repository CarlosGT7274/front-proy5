import { React } from 'react'
import IndexLayout from './components/layouts'

function App() {
  const content = (
    <div>
      <main>
        <p>En nuestra tienda encontrarás una gran variedad de productos de alta calidad a precios competitivos. Desde tecnología hasta moda, pasando por belleza, hogar y mucho más.</p>
      </main>
      <footer>
        <p>&copy; 2023 Ecommerce Example. Todos los derechos reservados.</p>
      </footer>
    </div>
  )


  return (
    <IndexLayout render={content} />
  )}

export default App
