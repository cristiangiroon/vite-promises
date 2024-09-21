import './operations';

export function promiseSumar(num1: number, num2: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (num1 >= 0 && num2 >= 0) {
            resolve(num1 + num2);
        } else {
            reject('Error: Uno o ambos números son negativos.');
        }
    });
}

export function promiseDividir(num1: number, num2: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (num2 !== 0) {
            resolve(num1 / num2);
        } else {
            reject('Error: división por cero.');
        }
    });
}


