const displayValorAnterior = document.getElementById('prevalor')
const displayValorActual = document.getElementById('actualvalor')
const botonNros = document.querySelectorAll('.nro')
const botonOper = document.querySelectorAll('.oper')

/* const calculadora = new Calculadora();

console.log(calculadora.sumar(5,3))
console.log(calculadora.restar(5,3))
console.log(calculadora.multiplicar(5,3))
console.log(calculadora.dividir(5,3))
 */

const display = new Display(displayValorAnterior, displayValorActual)

botonNros.forEach(boton => {
    boton.addEventListener('click', ()=>{
        display.agregarNro(boton.innerHTML)
    })
})