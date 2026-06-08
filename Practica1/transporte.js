class transporte {
    #marcaMoto;
    #modeloMoto;
    #velocidadMoto;
    #idMoto;


    constructor(marca, modelo, velocidad, id) {
        this.#marcaMoto = marca;
        this.#modeloMoto = modelo;
        this.#velocidadMoto = velocidad;
        this.#idMoto = id;
    }

    getMarcaMoto(){
        return this.#marcaMoto;
    }

    getModeloMoto(){
        return this.#modeloMoto;
    }

    getVelocidadMoto(){
        return this.#velocidadMoto;
    }

    getIDmoto(){
        return this.#idMoto;
    }

    moverse(){
        console.log("El transporte se mueve. Id de transporte:" + this.#idMoto);
    }
}

module.exports = transporte