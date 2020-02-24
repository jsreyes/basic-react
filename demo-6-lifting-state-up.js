class Tenedor extends React.Component {
    constructor(props) {
        super(props)

        this.usar = this.usar.bind(this); // Informa que llame a la función usar declarada fuera del constructor
    }

    usar() {
        this.props.gestionarUso();
    }

    render() {
        return <button onClick={ this.usar }>Tenedor</button>
    }
}

class Plato extends React.Component {
    render() {
        return<h1>El plato está { this.props.comida }% lleno</h1>
    }
}

class Individual extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comida : 100
        }

        this.comer = this.comer.bind(this); 
    }

    comer() {
        this.setState(state => ({
            comida: comida - 5
        }))
    }

    render() {
        return (
            <div>
                <Tenedor gestionarUso={ this.comer } disabled={ this.state.comida <= 0 }></Tenedor>
                <Plato comida={ this.state.comida }></Plato>
            </div>
        )
    }
}