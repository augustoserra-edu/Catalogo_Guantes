class EquipoBoxeo {

    constructor(marca, tipo, color, onzas) {

        this.marca = marca;
        this.tipo = tipo;
        this.color = color;
        this.onzas = onzas;
    }

    mostrarInfo() {

        return `${this.tipo} - ${this.marca}`;
    }
}

export default EquipoBoxeo;