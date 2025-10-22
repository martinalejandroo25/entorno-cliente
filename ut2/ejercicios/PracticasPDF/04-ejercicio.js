/*
Partiendo de 2 variables primera y segunda que pediremos por teclado. Hacer
una página JavaScript que calcule:
a) la diferencia de primera menos segunda
b) la división de primera entre segunda
c) el resto de la división de primera entre segunda
*/
const outputDiv = document.getElementById('output')

let num1 = parseInt(prompt("Escribe el primer numero"))
let num2 = parseInt(prompt("Escribe el segundo y ultimo numero"))

outputDiv.innerHTML = `
<p>La diferencia de ${num1} menos ${num2} es: ${num1 - num2} </p>
<p> La división de ${num1} entre ${num2} es: ${num1 / num2} </p>
<p> El resto de la división de ${num1} entre ${num2} es: ${num1 % num2} </p> 
`