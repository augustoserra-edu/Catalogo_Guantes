class EquipoBoxeo {

    constructor(marca, tipo, color, imagen, onzas = "", talle = "") {

        this.marca = marca;
        this.tipo = tipo;
        this.color = color;
        this.imagen = imagen;
        this.onzas = onzas;
        this.talle = talle;
    }

    mostrarInfo() {

        return `${this.tipo} - ${this.marca}`;
    }
}

export default EquipoBoxeo;
