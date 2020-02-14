class Comanda extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pedido: '
        }

        this.actualizar = this.actualizar.bind(this)
    }

    actualizar(event) {
      this.setState({
        pedido: event.target.value
    })

    render() {
        return <input type="text" onChange
    }
}

