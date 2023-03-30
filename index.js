const displayValorAnterior = document.getElementById('prevalor')
const displayValorActual = document.getElementById('actualvalor')
const botonNros = document.querySelectorAll('.nro')
const botonOper = document.querySelectorAll('.oper')

const display = new Display(displayValorAnterior, displayValorActual)

botonNros.forEach(boton => {
    boton.addEventListener('click', ()=>{
        display.agregarNro(boton.innerHTML)
    })
})

botonOper.forEach(boton => {
    boton.addEventListener('click', ()=> display.computar(boton.value))
})