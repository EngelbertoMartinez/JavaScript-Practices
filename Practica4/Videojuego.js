class Videojuego {
    #nombreJuego
    #jugadores

    constructor(nombre, jugadores) {
        this.#nombreJuego = nombre
        this.#jugadores = jugadores
    }

    getJugadores(){
        return this.#jugadores
    }

    setJugadores(NvoJugador){
        this.#jugadores = NvoJugador
    }

    getNombreJuego(){
        return this.#nombreJuego
    }

    iniciarJuego(){
        console.log("Iniciando juego...")
    }

    cerrarJuego(){
        console.log("Cerrando juego...")
    }
}

module.exports = Videojuego