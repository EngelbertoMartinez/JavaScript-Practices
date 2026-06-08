class CuentaBancaria {
    #titularCuenta
    #saldoCuenta

    constructor(titular, saldo) {
    this.#titularCuenta = titular
    this.#saldoCuenta = saldo    
    }

    getTitular(){
        return this.#titularCuenta
    }

    getSaldo(){
        return this.#saldoCuenta
    }

    setSaldo(NvoSaldo){
        this.#saldoCuenta = NvoSaldo
    }

    depositar(){
        console.log("Depositando...")
    }

    retirar(){
        console.log("Retirando...")
    }
}

module.exports = CuentaBancaria