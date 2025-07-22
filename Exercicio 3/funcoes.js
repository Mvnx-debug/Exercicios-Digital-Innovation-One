export function calcularSalario(salarioBruto, bonificacao){
    const total = salarioBruto + bonificacao;
    return total;
};

export function calcularDesconto(total){
    if (total <= 1100){
        const desconto = total * (5/100);
       return  total - desconto;
    
    } else if (total <= 1100.01){
        const desconto = total * (10/100);
        return total - desconto;
    } else if(total >= 2500){
        const desconto = total * (15/100);
        return total - desconto;
    }
}