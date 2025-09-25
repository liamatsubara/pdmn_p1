import React from "react"
import LembreteEntrada from "./LembreteEntrada"
import LembreteLista from "./LembreteLista"

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      lembretes: [],
    }
  }

  addLembrete = (lembrete) => {
    const novoLembrete = {texto: lembrete}

    const novosLembretes = [...this.state.lembretes]
    novosLembretes.push(novoLembrete)

    this.setState({lembretes: novosLembretes})
  }

  render() {
    return (
      <div className="container px-2 mt-4">
        <LembreteLista
          lembretes={this.state.lembretes}/>
        <LembreteEntrada onAddLembrete={this.addLembrete}/>
      </div>
    )
  }
}

export default App
