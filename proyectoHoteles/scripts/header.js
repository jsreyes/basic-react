const Hero = ({filters}) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <section className="hero is-primary">
        <div className="hero-body">
            <div className="container">
            <h1 className="title">Hoteles</h1>
            <h2 className="subtitle">
              desde el <strong>{ filters.dateFrom.toLocaleDateString(undefined, options) }</strong> hasta el <strong>{ filters.dateTo.toLocaleDateString(undefined, options) } { filters.country !== (undefined || '') ? 'en ' + filters.country : '' } { filters.price !== (undefined || 0) ? 'por $' + filters.price : ''} { filters.rooms !== (undefined || 0) ? 'de hasta ' + filters.rooms + ' habitaciones': '' }</strong>
            </h2>
            </div>
        </div>
        </section>
    )
  }

export default Hero;

