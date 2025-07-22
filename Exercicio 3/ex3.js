import { calcularSalario, calcularDesconto } from "./funcoes.js";

const salarioBruto = 500;
const bonificacao = 200;
const total = calcularSalario(salarioBruto, bonificacao)
const desconto = calcularDesconto(total);


console.log(`Seu salario foi R$ ${total}, mas com o desconto do IOF ficou R$ ${desconto} o desconto foi de R$ ${total - desconto}`)