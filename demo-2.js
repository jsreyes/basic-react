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
        return <h1>La copa { this.state.llena ? 'tiene' : 'tenia' } { this.props.contenido }</h1>
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