const LembreteEntrada = () => {
  return (
    <div>
        {/* input */}
        <div className="row my-2">
            <div className="col-12 d-flex">
            <input 
                type="text"
                id="lembrete"
                className="flex-grow-1 text-center"
                placeholder="Digite seu novo lembrete"/>
            </div>
        </div>

        {/* botao Ok */}
        <div className="row my-2">
            <div className="col-12 d-flex">
            <button
                type="button"
                className="btn btn-primary flex-grow-1">
                OK
            </button>
            </div>
        </div>
    </div>
  )
}

export default LembreteEntrada