import * as readlineSync from "readline-sync";

// Definir la clave correcta
const claveCorrecta: string = "eureka";

// Inicializar el contador de intentos fallidos
let intentosFallidos: number = 0;

// Repetir hasta que se acierte la clave o se agoten los intentos
while (intentosFallidos < 3) {
    // Pedir al usuario que ingrese la clave
    const claveIngresada: string = readlineSync.question("Ingrese la clave: ");

    // Verificar si la clave ingresada es correcta
    if (claveIngresada === claveCorrecta) {
        // Mostrar mensaje de éxito y salir del programa
        console.log("¡Clave correcta! Has accedido al sistema.");
        break;
    } else {
        // Incrementar el contador de intentos fallidos
        intentosFallidos++;

        // Mostrar mensaje de intento fallido y el número de intentos restantes
        const intentosRestantes: number = 3 - intentosFallidos;
        console.log(`Clave incorrecta. Te quedan ${intentosRestantes} intentos.`);

        // Si se agotan los intentos, mostrar mensaje y salir del programa
        if (intentosFallidos === 3) {
            console.log("Has agotado todas las oportunidades. Inténtalo de nuevo más tarde.");
        }
    }
}
