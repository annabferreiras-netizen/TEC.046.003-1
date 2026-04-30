class Animal {
    constructor(apelido) {
        this.nome = apelido;
        
    }
    falar(som) {
         console.log(som);
    }

}

class Gato extends Animal {
    ronronar() {
        console.log(`O ${this.nome} está ronronando.`)
    }

}

class Cachorro extends Animal {
    abanarRabo() {
        console.log(`O ${this.nome} está feliz.`)
    }
}


class calopsita extends Animal {
    voar() {
        console.log(`A ${this.nome} está voando.`)
    }

}
let calopsita = new calopsita("Jorge");
let mia = new Gato("Mia");
let pandora = new Cachorro("Pandora");


Jorge.falar("Piu piu!");
Jorge.voar();
mia.falar("Miau!");
mia.ronronar();
pandora.falar("Au au!");
pandora.abanarRabo();

//criar uma classe de outro animal de estimação
//cobra,calopsita, ramster, etc...
//tem que estender Animal e ter um métodopróprio


