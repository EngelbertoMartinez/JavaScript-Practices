class persona {
    
    #nombrePersona
    #edadPersona

    constructor(nombre, edad) {
        this.#nombrePersona = nombre;
        this.#edadPersona = edad;
    }

    getNombrePersona(){
        return this.#nombrePersona;
    }

    getEdadPersona(){
        return this.#edadPersona;
    }

    setNombrePersona(NvaPersona){
        this.#nombrePersona = NvaPersona;
    }    

    setEdadPersona(NvaEdad){
        this.#edadPersona = NvaEdad;
    }

    presentarse(){
        console.log("Hola, soy una persona.")
    }
}

module.exports = persona