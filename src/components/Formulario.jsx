import { useState } from "react";

function Formulario({ agregarEquipo }) {

    const [mostrandoTipos, setMostrandoTipos] = useState(false);
    const [tipo, setTipo] = useState("");
    const [marca, setMarca] = useState("");
    const [color, setColor] = useState("");
    const [onzas, setOnzas] = useState("");
    const [talle, setTalle] = useState("");
    const [imagen, setImagen] = useState("");
    const [archivoKey, setArchivoKey] = useState(0);

    const manejarImagen = (e) => {

        const archivo = e.target.files[0];

        if (!archivo) {
            setImagen("");
            return;
        }

        const lector = new FileReader();

        lector.onload = () => {
            setImagen(lector.result);
        };

        lector.readAsDataURL(archivo);
    };

    const limpiarFormulario = () => {

        setMostrandoTipos(false);
        setTipo("");
        setMarca("");
        setColor("");
        setOnzas("");
        setTalle("");
        setImagen("");
        setArchivoKey(archivoKey + 1);
    };

    const seleccionarTipo = (tipoSeleccionado) => {

        setTipo(tipoSeleccionado);
        setOnzas("");
        setTalle("");
    };

    const manejarSubmit = (e) => {

        e.preventDefault();

        agregarEquipo({
            marca,
            tipo,
            color,
            onzas,
            talle,
            imagen
        });

        limpiarFormulario();
    };

    if (!mostrandoTipos) {

        return (

            <div className="formulario-inicio">

                <button type="button" onClick={() => setMostrandoTipos(true)}>
                    Agregar
                </button>

            </div>
        );
    }

    return (

        <form onSubmit={manejarSubmit}>

            {!tipo && (

                <div className="selector-tipo">

                    <p>Que producto queres agregar?</p>

                    <button type="button" onClick={() => seleccionarTipo("Guantes")}>
                        Guante
                    </button>

                    <button type="button" onClick={() => seleccionarTipo("Casco")}>
                        Casco
                    </button>

                    <button type="button" onClick={limpiarFormulario}>
                        Cancelar
                    </button>

                </div>
            )}

            {tipo && (

                <>

                    <h2>Agregar {tipo}</h2>

                    <input
                        type="text"
                        placeholder="Marca"
                        value={marca}
                        onChange={(e) => setMarca(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        required
                    />

                    {tipo === "Guantes" && (

                        <input
                            type="number"
                            placeholder="Onzas"
                            value={onzas}
                            onChange={(e) => setOnzas(e.target.value)}
                            required
                        />
                    )}

                    {tipo === "Casco" && (

                        <select
                            value={talle}
                            onChange={(e) => setTalle(e.target.value)}
                            required
                        >

                            <option value="">Talle</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>

                        </select>
                    )}

                    <input
                        key={archivoKey}
                        type="file"
                        accept="image/*"
                        onChange={manejarImagen}
                        required
                    />

                    <button type="submit">
                        Guardar
                    </button>

                    <button type="button" onClick={limpiarFormulario}>
                        Cancelar
                    </button>

                </>
            )}

        </form>
    );
}

export default Formulario;
