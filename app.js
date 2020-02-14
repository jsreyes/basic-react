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
////////////////////////////////////////////////////////////////////////////////////////////
// Second Lesson
class Copa extends React.Component {
    // Se crea el método constructor que recibe las propiedades del componente
    constructor(props) {
        // Se llama el Super para que ejecutar el constructor de la clase o componente superior
        super(props);
        // Se crea un estado para el componente
        this.state = {
            llena: false
        }

        // Se bindean los metodos al componente
        this.tomar = this.tomar.bind(this);
        this.llenar = this.llenar.bind(this);
    }

    // Metodo que permite renderizar el componente
    render() {
        // Dependiendo el estado del componente se visualiza una palabra o la otra
        return <h1>La copa { this.state ? 'tiene' : 'tenia' } { this.props.contenido }</h1>
    }

    /*
        Se crean dos funcione que cambiaran el estado de la app
    */
   tomar() {
       this.state = {
           llena: false
       }
   }

   llenar() {
       this.state = {
           llena: true
       }
   }
}

<Copa contenido="vino"/>