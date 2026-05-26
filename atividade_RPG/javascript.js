class personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.vida = hp;
        this.mana = mana;
        this.energia = energia;
    }
    hero_atacar(alvo, habilidade) {
        if (this.mana >= habilidade.custo
            && this.energia >= habilidade.energia) {
            alvo.vida = alvo.vida - habilidade.dano;
            //Debitar Mana
            if (habilidade.custo > 0) {
                this.mana -= habilidade.custo
                this.energia += 50;
            }
            // Debitar Energia
            if (habilidade.energia > 0) {
                this.energia = 0;
            }
        } else {
            return "Sem mana ou energia";
        }
    }
    boss_atacar(alvo) {
        if (this.energia >= 100) {
            alvo.hp -= 15;
            this.energia = 0;
        } else {
            this.energia += 50;
        }
    }

}
class Habilidades {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
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
let containerBtn = document.getElementById("controles");
let listaHabilidades = [
    new Habilidades(1, "⚔️Ataque", 4, 0, 0),
    new Habilidades(2, "🪙Skill", 8, 10, 0),
    new Habilidades(3, "💥Supremo", 15, 0, 100),

];
listaHabilidades.forEach(hab => {
    let btn = document.createElement("button");//<button>
    btn.innerText = hab.nome;
    btn.classList.add("btn", "btn-outline-warning");
    containerBtn.appendChild(btn);
    btn.onclick = () => {
        hero.hero_atacar(boss, hab);
        atualizarTela();
    }
});
const atualizarTela = () => {
    document.getElementById("hp-boss").value = boss.vida;
    document.getElementById("mp-hero").value = hero.mana;
    document.getElementById("en-hero").value = hero.energia
}