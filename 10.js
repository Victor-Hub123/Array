let jogos = ["Elden Ring", "Far Cry 6", "The Witcher 3"];
let jogoFavorito = "The Witcher 3";
let quantidade = jogos.length;

for(let i = 0; i < quantidade; i++){
    if(jogoFavorito === jogos[i]){
        console.log(`${jogos[i]} ocupa a posição ${i+1}`);
    }
}