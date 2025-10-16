// Hacer una página JavaScript que pida dos variables por teclado y nos indique si 
// la suma de los números es mayor que el producto de ellos o al contrario.   Ej1. numero1=1; numero2=2 ----> "la suma es mayor que el producto" Ej2. numero1=3; numero2=2 ----> "el producto es mayor que la suma
let numero1 = prompt("Dame el primer numero")
if (typeof numero1 != 'number' || !isNaN(numero1)) {
    console.log("Numero invalido")
} else {
    let numero2 = prompt("Dame el primer numero")
    if (typeof numero1 != 'number' || !isNaN(numero1)) {
    console.log("Numero invalido")
    } else {
        let suma = numero1 + numero2
        let producto = numero1 * numero2
        if (suma > producto) {
            console.log("")
        } else {
            
        }
    }
}