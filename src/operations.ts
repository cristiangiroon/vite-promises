import {promiseDividir, promiseSumar} from './promises';

export function sumaNumeros(num1: number, num2: number): void {
    promiseSumar(num1, num2)
        .then((resultado) => {
            console.log('La suma es ' + resultado);
        })
        .catch((error) => {
            console.error(error);
        });
}

export function dividirNumeros(num1: number, num2: number): void {
    promiseDividir(num1, num2)
        .then((resultado) => {
            console.log("El división es: " + resultado)
        })
        .catch((error) => {
            console.error(error);
        });
}