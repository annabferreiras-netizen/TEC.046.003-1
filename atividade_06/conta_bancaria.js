class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    verSaldo() {
        console.log(
            `Olá ${this.titular},
             Seu saldo atual é
              R$${this.saldo}`);
        }

        depositar(valor) {
            this.saldo += valor;
        }

// criar o método sacar e sacar 100 da sua conta

}

let contaDaAnna = new ContaBancaria("Anna", 20000);
contaDaAnna.verSaldo()
contaDaAnna.depositar(500)
contaDaAnna.sacar(100)
contaDaAnna.verSaldo()
let ContaDaDaffinny = new ContaBancaria("Daffinny", 10000);
ContaDaDaffinny.verSaldo();



