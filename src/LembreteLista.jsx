import React from "react"

class LembreteLista extends React.Component {

  render() {

    const lembretes = this.props.lembretes

    return (
      <div>
        <div className="row">
          {lembretes.map(lembrete => (
            <div className="col-12 text-center">
              <div className="border rounded my-2">
                <p className="m-2">{lembrete.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default LembreteLista