const displayValorAnterior = document.getElementById(`prevalor`)
const displayValorActual = document.getElementById(`actualvalor`)
const botonNros = document.querySelectorAll(`.nro`)
const botonOper = document.querySelectorAll(`.oper`)

const calculadora = new Calculadora();

console.log(calculadora.sumar(2,3))