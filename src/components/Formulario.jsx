import { useState } from "react";

function Formulario({ agregarEquipo }) {

    const [marca, setMarca] = useState("");
    const [tipo, setTipo] = useState("");
    const [color, setColor] = useState("");
    const [onzas, setOnzas] = useState("");

    const manejarSubmit = (e) => {

        e.preventDefault();

        agregarEquipo({
            marca,
            tipo,
            color,
            onzas
        });

        setMarca("");
        setTipo("");
        setColor("");
        setOnzas("");
    };

    return (

        <form onSubmit={manejarSubmit}>

            <input
                type="text"
                placeholder="Marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
            />

            <input
                type="number"
                placeholder="Onzas"
                value={onzas}
                onChange={(e) => setOnzas(e.target.value)}
                required
            />

            <button type="submit">

                Agregar

            </button>

        </form>
    );
}

export default Formulario;