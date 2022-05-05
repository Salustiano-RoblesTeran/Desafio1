// Defino variables

let numero1, numero2, operacion, resultado;

numero1 = parseInt(prompt("Ingrese un numero: "));
numero2 = parseInt(prompt("Ingrese otro numero: "));

operacion = prompt("Ingrese el signo de la operacion (*, /, +, -): ");

// Utilizamos un ciclo switch

switch (operacion) {

    case '-':
        resultado = numero1 - numero2;
        console.log("La suma de " + numero1 + " mas " + numero2 + " es " + resultado);
    break;
    case '+':
        resultado = numero1 + numero2;
        console.log("La resta de " + numero1 + " menos " + numero2 + " es " + resultado);
    break;
    case '*':
        resultado = numero1 * numero2;
        console.log("La multiplicacion de " + numero1 + " por " + numero2 + " es " + resultado);
    break;
    case '/':
        resultado = numero1 / numero2;
        console.log("La division de " + numero1 + " dividido en " + numero2 + " es " + resultado)
    break;
    default:
        console.log("Operacion mal ingresada");
}

// Usamos un condicional if else

if (resultado % 2 == 0) {
    console.log("El resultado " + resultado + " es par.");
} else {
    console.log("El resultado " + resultado + " es impar.");
}