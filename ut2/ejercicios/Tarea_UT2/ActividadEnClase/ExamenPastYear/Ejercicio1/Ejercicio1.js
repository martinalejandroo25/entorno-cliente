function operaciones(num1, num2, num3, num4, num5) {
        let mayor = Math.max(num1, num2, num3, num4, num5)
        let menor = Math.min(num1, num2, num3, num4, num5)
        let suma = num1 + num2 + num3 + num4 + num5
        let media = suma / 5
        return "El numero mayor es " + mayor + ", <br> el menor es " + menor + ", <br> la suma de todos los numeros es " + suma + " <br> la media de todos los numeros es " + media
}