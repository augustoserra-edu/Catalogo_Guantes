import EquipoBoxeo from "../src/models/EquipoBoxeo.js";
import Catalogo from "../src/models/Catalogo.js";

const mostrarResultado = (nombrePrueba, condicion) => {
  console.assert(condicion, `Fallo: ${nombrePrueba}`);

  if (condicion) {
    console.log(`Aprobada: ${nombrePrueba}`);
  }
};

const probarEquipoBoxeo = () => {
  const guantes = new EquipoBoxeo("1", "Guantes", "Rojo", "./guantes.jpg", 12);
  const casco = new EquipoBoxeo("Adidas", "Casco", "Negro", "./casco.jpg", 12, "L");


  mostrarResultado(
    "guantes guarda la marca como string",
    typeof guantes.marca === "string"
  );
 
  mostrarResultado(
    "EquipoBoxeo guarda la ruta imagen como string",
    typeof guantes.imagen === "string"
  );
  mostrarResultado(
    "guantes guarda el tipo como string",
    typeof guantes.tipo === "string"
  );

  mostrarResultado(
    "guantes guarda el color como string",
    typeof guantes.color === "string"
  );

  mostrarResultado(
    "guantes guarda las onzas como numero entero",
    Number.isInteger(guantes.onzas)
  );

  mostrarResultado(
    "casco guarda el talle como string",
    typeof casco.talle === "string"
  );
  mostrarResultado(
    "casco guarda la marca como string",
    typeof casco.marca === "string"
  );
  mostrarResultado(
    "casco guarda el tipo como string",
    typeof casco.tipo === "string"
  );
  mostrarResultado(
    "casco guarda el color como string",
    typeof casco.color === "string"
  );

  mostrarResultado(
    "casco guarda la ruta imagen como string",
    typeof casco.imagen === "string"
  );
   mostrarResultado(
    "casco guarda el talle imagen como string",
    typeof casco.talle === "string"
  );
};

const probarCatalogo = () => {
  const catalogo = new Catalogo();
  const equipo = new EquipoBoxeo("Adidas", "Casco", "Negro", "", "", "L");

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
