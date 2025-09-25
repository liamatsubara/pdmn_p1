import React from "react"

class LembreteEntrada extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    aoClicar = () => {
        if (this.state.inputValue.trim() !== '') {
            this.props.onAddLembrete(this.state.inputValue);
            this.setState({ inputValue: '' });
        }
    }


    render() {
        return (
            <div>
                {/* input */}
                <div className="row my-2">
                    <div className="col-12 d-flex">
                        <input
                            type="text"
                            id="lembrete"
                            className="flex-grow-1 text-center border rounded py-2"
                            placeholder="Digite seu novo lembrete"
                            value={this.state.inputValue}
                            onChange={this.handleInputChange}
                        />

                    </div>
                </div>

                {/* botao Ok */}
                <div className="row my-2">
                    <div className="col-12 d-flex">
                        <button
                            type="button"
                            className="btn btn-primary flex-grow-1"
                            onClick={this.aoClicar}>
                            OK
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LembreteEntrada