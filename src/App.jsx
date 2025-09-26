import React from "react"
import LembreteEntrada from "./LembreteEntrada"
import LembreteLista from "./LembreteLista"

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      lembretes: [],
      filtro: 'todos',
    }
  }

  addLembrete = (lembrete) => {
    const novoLembrete = {
      id: Date.now(),
      texto: lembrete,
      favorito: false
    }

    const novosLembretes = [...this.state.lembretes]
    novosLembretes.push(novoLembrete)

    this.setState({lembretes: novosLembretes})
  }

  removeLembrete = (id) => {
    this.setState({
      lembretes: this.state.lembretes.filter(lembrete => lembrete.id != id)
    })
  }

  isFavorito = (id) => {
    this.setState({
      lembretes: this.state.lembretes.map((lembrete => {
        if(lembrete.id === id) {
          return { ...lembrete, favorito: !lembrete.favorito }
        }
        return lembrete
      }))
    })
  }

  alternarFiltro = () => {
    this.setState(prevState => ({
      filtro: prevState.filtro === 'todos' ? 'favoritos' : 'todos'
    }))
  }

  render() {

    const lembretes = this.state.lembretes
    const filtro = this.state.filtro
    let lembretesFiltrados

    if(this.state.filtro === 'todos'){
      lembretesFiltrados = this.state.lembretes
    } else {
      lembretesFiltrados = this.state.lembretes.filter(lembrete => lembrete.favorito === true)
    }


    return (
      <div className="container px-2 mt-4">
        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-secondary" onClick={this.alternarFiltro}>
            {filtro === 'todos' ? 'Apenas Favoritos' : 'Todos'}
          </button>
        </div>

        <LembreteLista
          lembretes={lembretesFiltrados}
          onRemoveLembrete={this.removeLembrete}
          onAlternaFavorito={this.isFavorito}/>
          
        <LembreteEntrada onAddLembrete={this.addLembrete}/>
      </div>
    )
  }
}

export default App
