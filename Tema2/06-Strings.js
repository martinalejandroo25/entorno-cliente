// Strings

let myName = "Martin"
let greeting = 'Hola, mi nombre es ' + myName + '!'
console.log(greeting) // Hola, mi nombre es Martin!
console.log(typeof greeting) // string

// Longitud
console.log("Longitud:", greeting.length) // Longitud: 22

// Acceso a caracteres
console.log("Primer carácter:", greeting[0]) // Primer carácter: H
console.log("Último carácter:", greeting[greeting.length - 1]) // Último carácter: !

// Métodos comunes
console.log("Mayúsculas:", greeting.toUpperCase()) // Mayúsculas: HOLA, MI NOMBRE ES MARTIN!
console.log("Minúsculas:", greeting.toLowerCase()) // Minúsculas: hola, mi nombre es martin!
console.log(greeting.indexOf("Martin")) // 18
console.log(greeting.includes("nombre")) // true
console.log(greeting.split(" ")) // [ 'Hola,', 'mi', 'nombre', 'es', 'Martin!' ]
console.log(greeting.slice(0, 4)) // Hola
console.log(greeting.replace("Martin", "Ana")) // Hola, mi nombre es Ana!

//Template literals (plantillas de texto)
let mesage = `Hola este es mi
curso de JavaScript`

console.log(mesage)

console.log(`Hola, ${myName}. Bienvenido a JavaScript!`)