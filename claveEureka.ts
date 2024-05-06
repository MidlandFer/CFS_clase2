import * as readlineSync from "readline-sync";

// Clave correcta
const claveCorrecta: string = "eureka";

// Contador de intentos erróneos
let intentosFallidos: number = 0;

while (intentosFallidos < 3) {
    // Solicitar al usuario el ingreso de clave
    const claveIngresada: string = readlineSync.question("Ingrese la clave: ");

    // Verificacion de clave ingresada
    if (claveIngresada === claveCorrecta) {
        // Mensaje de clave correcta y salir del programa
        console.log("¡Clave correcta! Has accedido al sistema.");
        break;
    } else {
        // Incremento de contador de intentos erroneos
        intentosFallidos++;

        // Mensaje de intento erroneo y el número de intentos
        const intentosRestantes: number = 3 - intentosFallidos;
        console.log(`Clave incorrecta. Te quedan ${intentosRestantes} intentos.`);

        // Agotados los intentos mostrar mensaje y salir del programa
        if (intentosFallidos === 3) {
            console.log("Has agotado todas las oportunidades. Inténtalo de nuevo más tarde.");
        }
    }
}
