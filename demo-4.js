/* RENDERIZADO CON LISTAS*/
class Lugar extends React.Component {
    render() {
        return <h1>Aca come { this.props.persona }</h1>
    }
}

class Mesa extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            comensales: [
                { nombre: 'Alejandra' },
                { nombre: 'Paula' },
                { nombre: 'Carolina' }, 
                { nombre: 'Jose' } 
            ]
        }
    }

    // Retorna por cada nombre del comensal un componente Lugar
    // En este caso retornara 4 componentes Lugar
    render() {
        return this.state.map((comensal) => <Lugar persona={ comensal.nombre } /> )
    }
}