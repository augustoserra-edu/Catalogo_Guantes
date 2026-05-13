function CardEquipo({ equipo }) {

    return (

        <div className="card">

            <h2>{equipo.tipo}</h2>

            <p>
                <strong>Marca:</strong> {equipo.marca}
            </p>

            <p>
                <strong>Color:</strong> {equipo.color}
            </p>

            <p>
                <strong>Onzas:</strong> {equipo.onzas} oz
            </p>

        </div>
    );
}

export default CardEquipo;