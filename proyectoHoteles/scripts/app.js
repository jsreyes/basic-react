moment.locale("es");
const Hero = ({ filters }) => {
  const dateFrom = moment(String(filters.dateFrom)).format(
    `dddd, D [de] MMMM [de] YYYY`
  );
  const dateTo = moment(String(filters.dateTo)).format(
    `dddd, D [de] MMMM [de] YYYY`
  );
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hoteles</h1>
          <h2 className="subtitle">
            desde el <strong>{dateFrom}</strong> hasta el{" "}
            <strong>{dateTo}</strong>
            <strong>
              {" "}
              {filters.country !== undefined
                ? filters.country !== "default"
                  ? "en " + filters.country
                  : ""
                : ""}
              {filters.price !== undefined
                ? filters.price !== "default"
                  ? " por $" + filters.price
                  : ""
                : ""}{" "}
              {filters.rooms !== undefined
                ? filters.rooms != 0
                  ? "de hasta " + filters.rooms + " habitaciones"
                  : ""
                : ""}
            </strong>
          </h2>
        </div>
      </div>
    </section>
  );
};
class DateFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(event) {
    this.props.onDateChange(event, this.props.name);
  }
  render() {
    const style = "fas fa-" + this.props.icon;
    return (
      <div className="field">
        <div className="control has-icons-left">
          <input
            className="input"
            type="date"
            onChange={this.handleDateChange}
            value={this.props.date}
            name={this.props.name}
            min="2020-17-04"
          />
          <span className="icon is-small is-left">
            <i className={style}></i>
          </span>
        </div>
      </div>
    );
  }
}

class OptionsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleOptionsChange = this.handleOptionsChange.bind(this);
  }

  handleOptionsChange(event) {
    this.props.onOptionChange(event, this.props.name);
  }
  render() {
    const iconClass = "fas fa-" + this.props.icon;
    return (
      <div className="field">
        <div className="control has-icons-left">
          <div className="select" style={{ width: "100%" }}>
            <select
              style={{ width: "100%" }}
              name={this.props.name}
              onChange={this.handleOptionsChange}
            >
              {this.props.options.map(({ value, name }, index) => (
                <option key={index} value={value}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="icon is-small is-left">
            <i className={iconClass}></i>
          </div>
        </div>
      </div>
    );
  }
}

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.handleFiltersChange = this.handleFiltersChange.bind(this);
  }

  handleFiltersChange(event, name) {
    let payload = this.props.filters;
    console.log(payload, ' este es payload')
    console.log(typeof payload, ' este es payload type of')
   //  name === 'dateFrom' || name === 'dateTo' ? payload[name] = new Date(event.target.value) : payload[name] = event.target.value;
    payload[name] = event.target.value;
    console.log(typeof payload[name], ' type of')
    this.props.onFilterChange(payload);
  }

  render() {
    return (
      <nav className="navbar is-info" style={{ justifyContent: "center" }}>
        <div className="navbar-item">
          <DateFilter
            date={this.props.filters.dateFrom}
            icon="sign-in-alt"
            onDateChange={this.handleFiltersChange}
            name="dateFrom"
          />
        </div>
        <div className="navbar-item">
          <DateFilter
            date={this.props.filters.dateTo}
            icon="sign-out-alt"
            onDateChange={this.handleFiltersChange}
            name="dateTo"
          />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            options={[
              { value: 0, name: "Todos los países" },
              { value: "Argentina", name: "Argentina" },
              { value: "Brasil", name: "Brasil" },
              { value: "Chile", name: "Chile" },
              { value: "Uruguay", name: "Uruguay" }
            ]}
            selected={this.props.filters.country}
            icon="globe"
            filters={this.props.filters}
            onOptionChange={this.handleFiltersChange}
            name="country"
          />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            options={[
              { value: 0, name: "Cualquier precio" },
              { value: 1, name: "$" },
              { value: 2, name: "$$" },
              { value: 3, name: "$$$" },
              { value: 4, name: "$$$$" }
            ]}
            selected={this.handleFiltersChange}
            icon="dollar-sign"
            filters={this.props.filters}
            onOptionChange={this.handleFiltersChange}
            name="price"
          />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            options={[
              { value: 0, name: "Cualquier tamaño" },
              { value: 10, name: "Hotel pequeño" },
              { value: 20, name: "Hotel mediano" },
              { value: 30, name: "Hotel grande" }
            ]}
            selected={this.props.filters.rooms}
            icon="bed"
            filters={this.props.filters}
            onOptionChange={this.handleFiltersChange}
            name="rooms"
          />
        </div>
      </nav>
    );
  }
}

const Hotel = ({ hotel }) => {
  const { slug, name, photo, description, rooms, city, country, price } = hotel;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={photo} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">{name}</p>
        <p>{description}</p>
        <div
          className="field is-grouped is-grouped-multiline"
          style={{ marginTop: "1em" }}
        >
          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-medium is-info">
                <i className="fas fa-map-marker"></i>
              </span>
              <span className="tag is-medium">
                {city}, {country}
              </span>
            </div>
          </div>
          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-medium is-info">
                <i className="fas fa-bed"></i>
              </span>
              <span className="tag is-medium">{rooms} Habitaciones</span>
            </div>
          </div>
          <div className="control">
            <div className="tags">
              <span className="tag is-medium is-info">
                <i
                  className="fas fa-dollar-sign"
                  style={{ margin: "0 .125em" }}
                ></i>
                <i
                  className="fas fa-dollar-sign"
                  style={
                    price !== 1
                      ? { margin: "0 .125em" }
                      : { margin: "0 .125em", opacity: ".25" }
                  }
                ></i>
                <i
                  className="fas fa-dollar-sign"
                  style={
                    price == 3 || price === 4
                      ? { margin: "0 .125em" }
                      : { margin: "0 .125em", opacity: ".25" }
                  }
                ></i>
                <i
                  className="fas fa-dollar-sign"
                  style={
                    price === 4
                      ? { margin: "0 .125em" }
                      : { margin: "0 .125em", opacity: ".25" }
                  }
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <a
          href="javascript:alert('No implementamos esto aún :(')"
          className="card-footer-item has-background-primary has-text-white has-text-weight-bold"
        >
          Reservar
        </a>
      </div>
    </div>
  );
};

const Hotels = ({ hotels }) => {
  return (
    <section className="section" style={{ marginTop: "3em" }}>
      <div className="container">
      {hotels.length > 0 ?
        <div className="columns is-multiline">
          {hotels.map((hotel, index) => (
            <div className="column is-one-third" key={index}>
              <Hotel hotel={hotel} />
            </div>
          ))}
        </div>
        : <article class="message is-danger">
        <div class="message-header">
          <p>NO SE ENCONTRARON HOTELES</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
          <strong>No se encontraron hoteles con los filtros que ha definido, por favor cambie los filtros para realizar una nueva búsqueda</strong>
        </div>
      </article> }
      </div>
    </section>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        dateFrom: new Date(today), // Proviene del archivo data.js
        dateTo: new Date(today.valueOf() + 86400000),
        country: undefined,
        price: 0,
        rooms: undefined
      },
      hotels: hotelsData
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(payload) {
    this.setState({
      filters: payload
    });
  }

  render() {

    this.state.filters.price !== undefined
      ? (this.state.filters.price = Number(this.state.filters.price))
      : (this.state.filters.price = undefined);
    const validFilters = Object.keys(this.state.filters).filter(filter => {
      const filterValue = this.state.filters[filter];

      if (typeof filterValue === "number" || typeof filterValue === 'string') {
        return filterValue != 0;
      }
      return filterValue !== undefined;
    });

    let hotelsFiltered = this.state.hotels.filter(hotel => {
      let expressionStatus = false;
      validFilters.every(key => {
        if(key === 'rooms') {        
          switch(this.state.filters[key]) {
            case 0:
              expressionStatus = true;
            case '10':
              expressionStatus = hotel[key] <= Number(this.state.filters[key]);
              break;
            case '20': 
              expressionStatus = (10 < hotel[key]) && ( hotel[key] <= this.state.filters[key]);
              break;
            case '30':
              expressionStatus = hotel[key] > 20;
              break;
          }
        } else if( key === 'dateFrom' || key ==='dateTo') {
          console.log(this.state.filters[key].valueOf(), ' < ', hotel[key], ' < ' , this.state.filters['dateTo'].valueOf() );

          key === 'dateFrom' ? expressionStatus = (new Date(this.state.filters[key]).valueOf() <= hotel[key] && hotel[key] <= new Date(this.state.filters['dateTo']).valueOf()) : 
          expressionStatus =  (new Date(this.state.filters['dateFrom']).valueOf() <= hotel[key] <= new Date(this.state.filters[key]).valueOf());

          console.log(expressionStatus, ' este es expression status');
        }else {
          expressionStatus = hotel[key] === this.state.filters[key];
        }
        console.log(expressionStatus, ' este es')
        return expressionStatus;
      });

      return expressionStatus;
    });

    console.log(validFilters.length, ' es te: ', validFilters);


    console.log(hotelsFiltered, " estos son los hoteles filtrados");

    return (
      <div>
        <Hero filters={this.state.filters} />
        <Filters
          filters={this.state.filters}
          onFilterChange={this.handleFilterChange}
        />
        <Hotels
          hotels={ hotelsFiltered }
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
