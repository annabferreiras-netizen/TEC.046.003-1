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

let mia = new Gato("Mia");
let pandora = new Cachorro("Pandora");

mia.falar("Miau!");
mia.ronronar();
pandora.falar("Au au!");
pandora.abanarRabo();

//criar uma classe de outro animal de estimação
//cobra,calopsita, ramster, etc...
//tem que estender Animal e ter um métodopróprio

class Animal {
    constructor(apelido) {
        this.nome = apelido;
        
    }
    falar(som) {
         console.log(som);
    }

}

class calopsita extends Animal {
    voar() {
        console.log(`A ${this.nome} está voando.`)
    }

}

class cobra extends Animal {
    rastejar() {
        console.log(`A ${this.nome} está rastejando.`)
    }
}

class hamster extends Animal {
    correrNaRoda() {
        console.log(`O ${this.nome} está correndo na roda.`)
    }
}

let calopsita = new calopsita("Jorge");
let cobra = new cobra("Sabrina");
let hamster = new hamster("Ratatouille");


calopsita.falar("Piu piu!");
calopsita.voar();
cobra.falar("Sssss!");
cobra.rastejar();
hamster.falar("Squeak!");
hamster.correrNaRoda();