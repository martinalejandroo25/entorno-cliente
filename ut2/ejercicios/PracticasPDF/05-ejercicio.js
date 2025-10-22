/*
Partiendo de 2 variables de tipo string llamadas cadena1 y cadena2 que
pediremos por teclado. Hacer una página JavaScript que calcule:
a) cadena3 contendrá el valor de la concatenación de cadena1 y cadena2,
mostrar por pantalla el contenido de cadena3
b) cadena1 contendrá el resultado de la concatenación de sí misma con cadena2,
mostrar por pantalla el contenido de cadena1
*/
const outputDiv = document.getElementById('output')

let cad1 = prompt("Escribe tu primer texto")
let cad2 = prompt("y aqui el segundo texto")

let cad3 = cad1 + " " + cad2

outputDiv.innerHTML = `
a)
<p> primera cadena: ${cad1}</p>
<p> segunda cadena: ${cad2}</p>
<p> concatenacion de cadenas: ${cad3}</p>
`
cad1 = cad1 + " " + cad2
outputDiv.innerHTML += `
b)
<p>cadena1 ha cambiado su valor: ${cad1}</p>
`

