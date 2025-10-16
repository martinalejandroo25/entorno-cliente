/**
 * Hacer una página JavaScript que compruebe si el contenido de una variable es
PAR o IMPAR (recordad que un número par su resto de la división entre 2 es 0)
 */
const outputDiv = document.getElementById('output')

let ParImpar = parseInt(prompt("Comprobemos si tu numero es PAR o IMPAR"))

function comprobar(ParImpar) {
    if (ParImpar % 2 == 0) {
        return "El numero es PAR"
    } else {
        return "El numero es IMPAR"
    }
}
outputDiv.innerHTML = `
    ${comprobar(ParImpar)}
`