const Videojuego = require("./Videojuego")

class JuegoOnline extends Videojuego{
    #servidor

    constructor(nombre, jugadores, servidor) {
        super(nombre, jugadores)
        this.#servidor = servidor
    }

    getServidor(){
        return this.#servidor
    }

    conectarServidor(){
        console.log("Conectando al servidor.....")
    }
    
    iniciarJuego(){
        console.log("El juego online se ha iniciado correctamente!.")
    }
}

const juego1 = new JuegoOnline("Minecraft", 10, "Hypixel")
juego1.iniciarJuego()
juego1.cerrarJuego()


module.exports = JuegoOnline