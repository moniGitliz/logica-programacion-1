function iniciarPrograma() {
    let repetir = true;

    while (repetir){
        //* Pedimos los 3 números al usuario y los convertimos a número
    let num1 = Number(prompt("Ingresa el primer número:"));
    let num2 = Number(prompt("Ingresa el segundo número:"));
    let num3 = Number(prompt("Ingresa el tercer número:"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Por favor, ingresa los 3 números correctamente.");
        repetir = confirm("Por favor, ingresa los 3 números correctamente.\n¿Quieres probar con otros números?");
        if (repetir) {
            iniciarPrograma();
        }
        return;
      }


    //* Imprimimos por consola los números ingresados
    console.log("Los números que ingresaste son:", num1, num2, num3);



            //* Verificamos si los 3 números son iguales
        if (num1 === num2 && num2 === num3) {
            console.log("Los tres números que ingresaste son iguales");
        } else {
            //* Si no son iguales, definimos las variables para almacenarlos según el orden que ocupen despues de compararlos
            let mayor, medio, menor;
            
            
            //* Caso#1 : num1 es el mayor
        if (num1 >= num2 && num1 >= num3) {
            mayor = num1;

            //* Ahora comparamos entre num2 y num3 para saber cual es el del  medio y cual el menor
            if (num2 >= num3) {
            medio = num2;
            menor = num3;
            } else {
            medio = num3;
            menor = num2;
            }

        //* Caso#2: num2 es el mayor
        } else if (num2 >= num1 && num2 >= num3) {
            mayor = num2;

            if (num1 >= num3) {
            medio = num1;
            menor = num3;
            } else {
            medio = num3;
            menor = num1;
            }

        //* Caso#3: num3 es el mayor
        } else {
            mayor = num3;

            if (num1 >= num2) {
            medio = num1;
            menor = num2;
            } else {
            medio = num2;
            menor = num1;
            }
        }

        //* Mostramos el resultado por consola
        console.log("Los números en orden de mayor a menor son :", mayor, medio, menor);
        console.log("Los números en orden de menor a mayor son:", menor, medio, mayor);
    }

    repetir = confirm("¿Quieres probar con otros números?");
    }
}

iniciarPrograma();