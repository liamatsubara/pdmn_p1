import LembreteEntrada from "./LembreteEntrada"
import LembreteLista from "./LembreteLista"

const App = () => {
  return (
    <div className="container px-2 mt-4">

      <LembreteLista/>
      <LembreteEntrada/>

    </div>
  )
}

export default App