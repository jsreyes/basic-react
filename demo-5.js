class Comanda extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pedido: ''
        }

        this.actualizar = this.actualizar.bind(this)
    }

    actualizar(event) {
      this.setState({
        pedido: event.target.value
      })
    }

    // Cada vez que el usuario modifique se ejecuta el metodo actualizar
    render() {
        return <input type="text" onChange={ this.actualizar } value={ this.state.pedido } />
    }
}

