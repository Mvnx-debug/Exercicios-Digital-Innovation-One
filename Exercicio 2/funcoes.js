export function verificarMaiorNumPar(numeros){ // exportando a função com o paramentro numeros passado que corresponde a lista no exercicio
    let maiorPar = null; // inicia com null para entrar no for (loop)
        for (let i = 0; i < numeros.length; i++) { //loop i passando pela lista de numeros
            if (numeros[i] % 2 === 0 ){ // verificação se o numero que corresponde ao indice(i) é par
                if (maiorPar === null || numeros[i] > maiorPar) { // verficação pra saber se maior par é igual a null ou numeros indice é maior que o numero antigo par
                    maiorPar = numeros[i]; //armazena o novo maiorPar
                }
                
        }
    }
    return maiorPar;// retorna o maior par para a função verificarMaiorNumPar()
};

export function verificarMaiorImpar(numeros){
    let maiorImpar = null;
    for (let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 != 0){
            if(maiorImpar === null || numeros[i] > maiorImpar){
                maiorImpar = numeros[i]
            }
        }
    }
    return maiorImpar
}