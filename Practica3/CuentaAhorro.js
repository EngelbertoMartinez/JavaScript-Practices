const CuentaBancaria = require("./CuentaBancaria");

class CuentaAhorro extends CuentaBancaria {
    #interesCuenta

    constructor(titular, saldo, interes) {
        super(titular, saldo)
        this.#interesCuenta = interes
    }

    getInteres(){
        return this.#interesCuenta
    }

    calcularInteres(){
        console.log("Calculando interes...")
    }

    retirar(){
        console.log("Retiro realizado desde la cuenta de ahorro.")
    }
}

const cuenta1 = new CuentaAhorro("Engel", 15000, "20%")
cuenta1.depositar()
cuenta1.retirar()
cuenta1.calcularInteres()


cuenta1.saldo = console.log("Nuevo saldo de la cuenta: $" + 10)

console.log(cuenta1.titular)
console.log(cuenta1.saldo)

module.exports = CuentaAhorro