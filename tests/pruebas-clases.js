import EquipoBoxeo from "../src/models/EquipoBoxeo.js";
import Catalogo from "../src/models/Catalogo.js";

const mostrarResultado = (nombrePrueba, condicion) => {
  console.assert(condicion, `Fallo: ${nombrePrueba}`);

  if (condicion) {
    console.log(`Aprobada: ${nombrePrueba}`);
  }
};

const probarEquipoBoxeo = () => {
  const equipo = new EquipoBoxeo("Everlast", "Guantes", "Rojo", 12);


  mostrarResultado(
    "EquipoBoxeo guarda la marca como string",
    typeof equipo.marca === "string"
  );
 
  mostrarResultado(
    "EquipoBoxeo guarda el tipo como string",
    typeof equipo.tipo === "string"
  );

  mostrarResultado(
    "EquipoBoxeo guarda el color como string",
    typeof equipo.color === "string"
  );

  mostrarResultado(
    "EquipoBoxeo guarda las onzas como numero entero",
    Number.isInteger(equipo.onzas)
  );

};

const probarCatalogo = () => {
  const catalogo = new Catalogo();
  const equipo = new EquipoBoxeo("Adidas", "Casco", "Negro", 14);

  mostrarResultado(
    "Catalogo inicia sin equipos",
    catalogo.obtenerEquipos().length === 0
  );

  catalogo.agregarEquipo(equipo);

  mostrarResultado(
    "Catalogo agrega un equipo",
    catalogo.obtenerEquipos().length === 1
  );
  mostrarResultado(
    "Catalogo devuelve el equipo agregado",
    catalogo.obtenerEquipos()[0] === equipo
  );
};



probarEquipoBoxeo();
probarCatalogo();

console.log("Fin de pruebas");
