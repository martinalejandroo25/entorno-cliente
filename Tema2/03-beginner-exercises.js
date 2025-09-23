// 1. Escribe un comentario en una linea

// Este es un comentario en una linea

// 2. Escribe un comentario en varias lineas

/* Este es un comentario
en varias lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivo

let myString = "Hola, soy una cadena de texto"
let myNumber = 42
let myBoolean = true
let myUndefined = undefined
let myNull = null
let mySymbol = Symbol("miSimbolo")
let myBigInt = 1234567890123456789012345678901234567890n

// 4. Imprime por consola el valor de todas las variables

console.log(myString)
console.log(myNumber)
console.log(myBoolean)
console.log(myUndefined)
console.log(myNull)
console.log(mySymbol)
console.log(myBigInt)

// 5. Imprime por consola el tipo de dato de todas las variables

console.log(typeof myString)    // string
console.log(typeof myNumber)    // number
console.log(typeof myBoolean)   // boolean
console.log(typeof myUndefined) // undefined
console.log(typeof myNull)      // object (esto es un comportamiento histórico de JavaScript)
console.log(typeof mySymbol)    // symbol
console.log(typeof myBigInt)    // bigint

// 6. A continuacion, modifica los valores de las variables por otros del mismo tipo

myString = "Hola, soy otra cadena de texto"
myNumber = 100
myBoolean = false
myUndefined = undefined
myNull = null
mySymbol = Symbol("otroSimbolo")
myBigInt = 9876543210987654321098765432109876543210n

// 7. A continuaion, modifica los valores de las variables por otros de distinto tipo

myString = 12345          // ahora es un number
myNumber = "Ahora soy texto" // ahora es un string
myBoolean = "true"        // ahora es un string
myUndefined = null       // ahora es un object
myNull = undefined       // ahora es un undefined
mySymbol = 100n          // ahora es un bigint
myBigInt = Symbol("nuevoSimbolo") // ahora es un symbol

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const myConstString = "Soy una constante de tipo string"
const myConstNumber = 3.14
const myConstBoolean = false
const myConstUndefined = undefined
const myConstNull = null
const myConstSymbol = Symbol("constanteSimbolo")
const myConstBigInt = 1234567890123456789012345678901234567890n

// 9. A continuacion, modifica los valores de las constantes

// myConstString = "Intento cambiar el valor" // Error
// myConstNumber = 42                        // Error
// myConstBoolean = true                      // Error
// myConstUndefined = null                    // Error
// myConstNull = undefined                    // Error
// myConstSymbol = Symbol("nuevoValor")       // Error
// myConstBigInt = 9876543210987654321098765432109876543210n // Error

// 10. Comenta las lineas que produzcan algun tipo de error al ejecutarse