const transporte = require('./transporte');
class motocicleta extends transporte {

    #cilindrada;

    constructor(marca, modelo, velocidad, id, cilindrada) {
        super (marca, modelo, velocidad, id);
        this.#cilindrada = cilindrada;
    }

    getCilindrada(){
        return this.#cilindrada;
    }

    caballito(){
        console.log("La motocicleta hace caballito");
    }

    moverse(){
    console.log("La motocicleta avanza rapidamente brum brum.");
    }
}

const moto1 = new motocicleta("Italika", "Deportiva", 100, 1, 300);
moto1.moverse();
moto1.caballito();

module.exports = motocicleta