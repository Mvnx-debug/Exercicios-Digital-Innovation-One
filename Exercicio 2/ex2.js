import { verificarMaiorNumPar, verificarMaiorImpar } from './funcoes.js'; //importando a função para verificarMaiorNumPar

const numeros = [198, 4, 5, 6, 7, 98, 100, 200, 203]; //lista de numeros criadas
const maiorPar = verificarMaiorNumPar(numeros); // maiorPar recebe a função
const maiorImpar = verificarMaiorImpar(numeros);

if (maiorPar !== null){ // se maior numero par for diferente de null imprima isso
    console.log(`O maior numero Par é : ${maiorPar}`)
} else{
    console.log('nenhum numero par encontrado');// se não imprima isso
}

if (maiorImpar !== 0){
    console.log(`O maior Numero Impar é: ${maiorImpar}`);
} else{
    console.log('Nenhum numero impar encontrado');
};