const Hero = ({filters}) => {  
  return (
      <section className="hero is-primary">
      <div className="hero-body">
          <div className="container">
          <h1 className="title">Hoteles</h1>
          <h2 className="subtitle">
            desde el <strong>{ filters.dateFrom }</strong> hasta el <strong>{ filters.dateTo } { filters.country !== undefined ? 'en ' + filters.country : '' } { filters.price !== undefined ? 'por $' + filters.price : ''} { filters.rooms !== undefined ? 'de hasta ' + filters.rooms + ' habitaciones': '' }</strong>
          </h2>
          </div>
      </div>
      </section>
  )
}

export default Hero;

