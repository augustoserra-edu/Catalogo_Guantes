function CardEquipo({ equipo }) {

    return (

        <div className="card">

            <img
                className="card-imagen"
                src={equipo.imagen}
                alt={`${equipo.tipo} ${equipo.marca}`}
            />

            <h2>{equipo.tipo}</h2>

            <p>
                <strong>Marca:</strong> {equipo.marca}
            </p>

            <p>
                <strong>Color:</strong> {equipo.color}
            </p>

            {equipo.tipo === "Guantes" && (

                <p>
                    <strong>Onzas:</strong> {equipo.onzas} oz
                </p>

            )}

            {equipo.tipo === "Casco" && (

                <p>
                    <strong>Talle:</strong> {equipo.talle}
                </p>

            )}

        </div>
    );
}

export default CardEquipo;
