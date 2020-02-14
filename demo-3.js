class Pollo extends React.Component {
    render() {
        return <h1>Esto es pollo { this.props.comido } ? 'comido' : 'sin comer'</h1>
    }
}

class Arvejas extends React.Component {
    render() {
        return <h1>Estas son Arvejas</h1>
    }
}

class Zanahorias extends React.Component {
    render() {
        return <h1>Estas son zanahorias</h1>
    }
}

class Plato extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            comido: false
        }
    }
    render() {
        if(this.state.comido) {
            return (
                <div>
                    <Pollo comido={ true }/>
                </div>
            )
        } else {
            return (
                <div>
                    <Pollo />
                    <Arvejas />
                    <Zanahorias />
                    <Arvejas />
                    <Zanahorias />
                </div>
            )
        }
    }
}