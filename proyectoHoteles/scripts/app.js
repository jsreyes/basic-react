const Hero = ({filters}) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
      <section className="hero is-primary">
      <div className="hero-body">
          <div className="container">
          <h1 className="title">Hoteles</h1>
          <h2 className="subtitle">
            desde el <strong>{ filters.dateFrom.toLocaleDateString(undefined, options) }</strong> hasta el <strong>{ filters.dateTo.toLocaleDateString(undefined, options) } { filters.country !== undefined ? 'en ' + filters.country : '' } { filters.price !== undefined ? 'por $' + filters.price : ''} { filters.rooms !== undefined ? 'de hasta ' + filters.rooms + ' habitaciones': '' }</strong>
          </h2>
          </div>
      </div>
      </section>
  )
}

const DateFilter = ({ date, icon}) => {
  const style = 'fas fa-' + icon ;
  return (
    <div className="field">
      <div className="control has-icons-left">
        <input className="input" type="date" value={ date.getDate() }/>
        <span className="icon is-small is-left">
          <i className={ style }></i>
        </span>
      </div>
    </div>
  )
}

const OptionsFilter = ({options, selected, icon}) => {
  const iconClass = 'fas fa-' + icon;  
  return (
    <div className="field">
      <div className="control has-icons-left">
        <div className="select" style={ {width: '100%'} }>
          <select style={ {width: '100%'} } value={ selected }>
            { options.map(({value, name}, index) => <option key={ index } value={ value }>{ name }</option>) } 
          </select>
        </div>
        <div className="icon is-small is-left">
          <i className={ iconClass }></i>
        </div>
      </div>
    </div>
  )
}

const Filters = ({filters}) => {
  return (
    <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
      <div className="navbar-item">
        <DateFilter
          date={ filters.dateFrom}
          icon="sign-in-alt" />
      </div>
      <div className="navbar-item">
        <DateFilter
          date={ filters.dateTo }
          icon="sign-out-alt" />
      </div>
      <div className="navbar-item">
        <OptionsFilter
          options={ [ {value: undefined, name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
          selected={ filters.country }
          icon="globe" />
      </div>
      <div className="navbar-item">
        <OptionsFilter
          options={ [ {value: undefined, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
          selected={ filters.price }
          icon="dollar-sign" />
      </div>
      <div className="navbar-item">
        <OptionsFilter
          options={ [ {value: undefined, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
          selected={ filters.rooms }
          icon="bed" />
      </div>
    </nav>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      filters : {
        dateFrom: today, // Proviene del archivo data.js
        dateTo: new Date(today.valueOf() + 86400000),
        country: undefined,
        price: undefined,
        rooms: undefined
      }
    }
  }

  render() {
    return (
      <div>
        <Hero filters={ this.state.filters } />
        <Filters filters={ this.state.filters } />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'))