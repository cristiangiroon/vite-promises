console.log('inicio');

export function sumaNumeros(num1: number, num2: number){
     new Promise((resolve, reject) => {
        if (num1 >= 0 && num2 >= 0) {
            resolve(num1 + num2);
        } else {
            reject('Error: Uno o ambos números son negativos.');
        }
    }).then((resultado)=>{
        console.log('La suma es ' + resultado);

    }).catch((error)=> console.error(error));
}

export function dividirNumeros(num1: number, num2: number){
     new Promise((resolve, reject) => {
        if (num2 !== 0) {
            resolve(num1 / num2);
        } else {
            reject('Error: división por cero.');
        }
    }).then((resultado)=>{
        console.log("El resultado es: " + resultado)
    }).catch((error)=>console.error(error));
}

