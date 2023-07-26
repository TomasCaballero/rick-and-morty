
const Main = ({pageNumber, listadoPersonajes}) => {
    return (
        <main className="layout__main">
            <h2 className="main__title">Character list: Page {pageNumber}</h2>
            <div className="main__listado">
                {
                    listadoPersonajes.map((personaje)=>{
                        return (
                            <div key={personaje.id} className="personaje">
                                <img src={personaje.image} alt={personaje.name} className="personaje__img"/>
                                <div className="personaje__info">
                                    <h3 className="personaje__nombre">{personaje.name}</h3>
                                    <p className="personaje__estado">Status: <div className={personaje.status}></div> {personaje.status}</p>
                                    <p className="personaje__especie">Species: {personaje.species}</p>
                                    <p className="personaje__sexo">Gender: {personaje.gender}</p>
                                    <p className="personaje__origen">Origin: {personaje.origin.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Main