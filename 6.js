let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let quantidade = numeros.length;

for(let i = 7; i < quantidade; i--){
    console.log(numeros[i]);
    if(i <= 0){
        break;
    }
}