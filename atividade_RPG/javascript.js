class personagem{
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.vida = hp;
        this.mana = mana;
        this.energia = energia;
    }
}
class Habilidades{
    constructor(id, nome, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.custo = custo;
        this.energia = energia;
    }
}
// Instancia Classes - Criar Objetos
let hero = new personagem("Zenitsu", "⚡ Caçador de Demônios", 100, 100, 0);
let boss = new personagem("Patrick", "🦢 O Pato", 100, 0, 50);
// preencher os Status
document.getElementById("hero-name").textContent = hero.nome;
document.getElementById("titulo-hero").textContent = hero.titulo;
document.getElementById("boss-name").textContent = boss.nome;
document.getElementById("titulo-boss").textContent = boss.titulo;
//Criar Habilidades
let listaHabilidades = [
new Habilidades(1, "Ataque", 4, 0, 0),
new Habilidades(2, "Skill", 8, 10, 0),
new Habilidades(3, "Supremo", 15, 0, 100),

];