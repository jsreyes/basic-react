// INICIO CLASE COMPONENTES EN REACT
function Servilleta() {
    return <h1>Soy una servilleta</h1>
}

// Declaración de un componente con React (Se cambian las funciones por las clases)
class Tenedor extends React.Component {
    render() {
        return <h1>Esto es un tenedor</h1>
    }
}

class Cuchillo extends React.Component {
    render() {
        return <h1>Esto es un Cuchillo</h1>
    }
}

class Servilleta extends React.Component {
    render() {
        return <h1>Esto es una servilleta</h1>
    }
}

class Cubiertos extends React.Component {
    render() {
        return (
        <Servilleta>
            <Tenedor></Tenedor>
            <Cuchillo></Cuchillo>
        </Servilleta>
        )
    }
}