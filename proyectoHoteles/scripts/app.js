const Hero = ({filters}) => {
  return (
      <section className="hero is-primary">
      <div className="hero-body">
          <div className="container">
          <h1 className="title">Hoteles</h1>
          <h2 className="subtitle">
              {/* desde el <strong>dddd, DD de mmmm de AAAA</strong> hasta el <strong>dddd, DD de mmmm de AAAA</strong> */}
              desde el <strong>{ filters.dateFrom.getDay() }</strong> hasta el <strong>{ filters.dateTo.getDate() }</strong>
          </h2>
          </div>
      </div>
      </section>
  )
}

function App() {
  const filters = {
    dateFrom: today, // Proviene del archivo data.js
    dateTo: new Date(today.valueOf() + 86400000),
    country: '',
    price: 0,
    rooms: 0
  }
  return (
    <div>
      <Hero filters={ filters }></Hero>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))