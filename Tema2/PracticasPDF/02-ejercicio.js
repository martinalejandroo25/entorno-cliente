// Añadir al segundo ejemplo (código JavaScript en un fichero independiente) las
// siguientes características: Después del primer mensaje, se muestre otro
// mensaje que diga “Soy el segundo script” Añadir algunos comentarios que
// expliquen el funcionamiento del código.

//imprime un mensaje por consola

const outputDiv = document.getElementById('output')

let mensaje1 ="Primer mensaje"
let mensaje2 ="Soy el segundo script"

outputDiv.innerHTML = `
Estos comandos se ejecutan e imprimen en consola:

    console.log("Primer mensaje");
    console.log("Soy el segundo script");

    Pero si queremos imprimir en el html podemos hacerlo asi:
    <p> ${mensaje1} </p>
    <p> ${mensaje2} </p>
`