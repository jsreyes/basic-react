// Clase de estilos Clases y Estilos Inline
class Copa extends React.Component {
    render() {
        return <h1 className={ this.props.contenido }>La copa está llena</h1> // Por clases
    }
}

class Copa extends React.Component {
    render() {
        return <h1 style={ { backgroundColor: this.props.contenido === 'vino' ? 'red' : 'white' } }>La copa está llena</h1> // Inline Style
    }
}

<Copa contenido="vino"></Copa>