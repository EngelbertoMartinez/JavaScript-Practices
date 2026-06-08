const persona = require("./persona")
class alumno extends persona {
    #carrera

    constructor(nombre, edad, carrera) {
        super(nombre, edad)
        this.#carrera = carrera
    }

    getCarrera(){
        return this.#carrera
    }

    estudiar(){
        console.log("El alumno se encuentra estudiando...")
    }

    presentarse(){
        console.log("Hola, ahora soy un estudiante...")
    }
}

const alumno1 = new alumno("Engel", 20, "informatica")
alumno1.presentarse()
alumno1.estudiar()

module.exports = alumno