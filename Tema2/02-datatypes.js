// String (cadena de texto)
let name = "Martin Alejandro";
let alias = "MartinOrtizz"
let email = "martinalejandro@gmail.com"

// Numeros
let age = 37 // entero
let height = 1.75 // decimal

// Booleanos (boolean)
let isTeacher = true
let isStudent = false

// Undefined
let undefinedValue
console.log(undefinedValue)

// Null
let nullValue = null

// Symbol
let mySymbol = Symbol("mySymbol")

// BigInt
let bigIntValue = BigInt(1234567890123456789012345678901234567890)
let myBigInt2 = 1234567890123456789012345678901234567890n

// Mostramos los tipos de datos
console.log(typeof name) // string
console.log(typeof alias) // string
console.log(typeof email) // string

console.log(typeof age) // number
console.log(typeof height) // number

console.log(typeof isTeacher) // boolean

console.log(typeof undefinedValue) // undefined

console.log(typeof nullValue) // object (esto es un comportamiento histórico de JavaScript)

console.log(typeof mySymbol) // symbol

console.log(typeof bigIntValue) // bigint
console.log(typeof myBigInt2) // bigint