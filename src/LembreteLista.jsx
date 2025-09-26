import React from "react"

class LembreteLista extends React.Component {

  remover = (lembrete) => {
    this.props.onRemoveLembrete(lembrete.id)
  }

  render() {
    const lembretes = this.props.lembretes

    return (
      <div>
        <div className="row">
          {lembretes.map(lembrete => (
            <div key={lembrete.id} className="col-12 text-center">
              <div className="d-flex border rounded my-2 align-items-center justify-content-center">
                <p className="col-11 m-2">{lembrete.texto}</p>
                <i className={`me-2 fa-star ${lembrete.favorito ? 'fa-solid' : 'fa-regular'}`}
                    onClick={() => this.props.onAlternaFavorito(lembrete.id)}
                    style={{ cursor: "pointer" }}></i>
                <i className="fa-solid fa-trash"
                    onClick={() => this.remover(lembrete)}
                    style={{ cursor: "pointer" }}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default LembreteLista