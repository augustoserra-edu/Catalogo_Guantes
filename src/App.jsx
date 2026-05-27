import { useState } from "react";

import "./styles/style.css";

import EquipoBoxeo from "./models/EquipoBoxeo";
import Catalogo from "./models/Catalogo";

import Formulario from "./components/Formulario";
import CardEquipo from "./components/CardEquipo";

function App() {
  const catalogoInicial = new Catalogo();

  catalogoInicial.agregarEquipo(
      new EquipoBoxeo(
          "Everlast",
          "Guantes",
          "Rojo",
          12
      )
  );

  catalogoInicial.agregarEquipo(
      new EquipoBoxeo(
          "Adidas",
          "Casco",
          "Negro",
          14
      )
  );

  const [equipos, setEquipos] = useState(catalogoInicial.obtenerEquipos());

  const agregarEquipo = (datos) => {
    const nuevoEquipo = new EquipoBoxeo(
      datos.marca,
      datos.tipo,
      datos.color,
      datos.onzas,
    );

    setEquipos([...equipos, nuevoEquipo]);
  };

  return (
    <div className="container">
      <h1>Catalogo de Equipos de Boxeo</h1>

      <Formulario agregarEquipo={agregarEquipo} />

      <div className="contenedor-cards">
        {equipos.map((equipo, index) => (
          <CardEquipo key={index} equipo={equipo} />
        ))}
      </div>
    </div>
  );
}

export default App;
