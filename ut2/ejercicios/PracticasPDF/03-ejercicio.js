/*
Partiendo de 2 variables primera y segunda que pediremos por teclado. Hacer
una página JavaScript que calcule:
a) la suma de primera y segunda
b) el producto de primera y segunda
*/
const outputDiv = document.getElementById('output')

let num1 = parseInt(prompt("Escribe el primer numero"))
let num2 = parseInt(prompt("Escribe el segundo y ultimo numero"))

outputDiv.innerHTML = `
<p>La suma de ${num1} y ${num2} es: ${num1 + num2} </p>
<p> El producto de ${num1} y ${num2} es: ${num1 * num2} </p>

`