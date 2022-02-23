// function sumar(x) {
//     let suma = 0;
//     for(let i = 0; i<=x; i++) {
//         suma += i;
//         console.log('Número:', i, 'Suma: ', suma);
//     }
//     return suma;
// }

// sumar(5);


// var msg = 'codingdojo';
// for(var x = 2; x < msg.length - 4; x+=1) {
//     if(msg.length == 7) { 
//         for (var i = 0; i < 8; i++) {
//             console.log(i);
//         }
//     } else {
//         for (var i = msg.length; i > (msg.length - 3); i-=3) {
//              console.log(i); 
//         }
//     }
// }

let nombre = 'César';
let apellido = 'Abarza';

if(nombre === 'César' && apellido !== 'Abarzas') {
    console.log('Si, así me llamo');
} else if (condicion2 === 'ABC') {

} else if(hgvjbknml) {

} else {

}

// if( a == 2) {

// } else if(a > 1) {

// } else if(a > 0) {

// }


// if(A+B === 10) {
//     if(A < 5) {
//         console.log('B es mayor a A');
//     } else {
//         console.log('A es mayor o igula que B');
//     }
// } else {

// }


let a = null;
let b;
let c = 0;
let d = '';

if(a) {
    console.log('Entro a A', a);
}

if(b) {
    console.log('Entro a B', b);
}

if(c) {
    console.log('Entro a C', c);
}

if(d) {
    console.log('Entro a D', d);
}

const valor = 1;

switch(valor) {
    case 0: 
        console.log('0');
        break;
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
        break;
    default:
        console.log('Otro valor');
        break;
}

if(valor === 0) {
    console.log('0');
} else if(valor === 1) {
    console.log('1');
} else if(valoe === 2) {
    console.log('2');
} else {
    console.log('Otro valor');
}

const arreglo = [1,2,3,4,5,6,7];

for(let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

for(let a of arreglo) {
    console.log(a);
}

for(let a in arreglo) {
    console.log(a);
}

const obj = {
    nombre: 'ndsndkl',
    apellido: 'sallnsdl',
    kdsa: 'mdlskm'
}

for(let o in obj) {
    console.log(o);
}

let i = 0;
while (i < arreglo.length) {
    console.log(arreglo[i++]);
}



const matriz = [4,3,2,1,7,6,5,4]

const promedio = (arreglo) => {
    return arreglo.reduce((sum, a) => sum += a, 0) / arreglo.length;
}

console.log('Promedio', promedio(matriz));


const puntoEquilobrio= (arreglo) => {
    let puntoEq;
    let sumIzq = 0; 
    for(let i = 0; i<arreglo.length; i++) {
        sumIzq += arreglo[i];
        let sumDer = 0;
        for(j = i+1; j<arreglo.length; j++){
            sumDer += arreglo[j];
            if(sumIzq < sumDer) {
                break;
            }
        }
        if(sumDer === sumIzq){
            puntoEq = [i, i+1];
            break;
        }
    }
    return puntoEq;
}

console.log('Punto Equilibrio', puntoEquilobrio(arreglo));
console.log('Punto Equilibrio', puntoEquilobrio([1,2,3,4,10,20]));

console.log('Punto Equilibrio', puntoEquilobrio([3, 4, 6, 8, 5]));

const indiceEquilibrio = (arreglo) => {
    for(let i = 1; i<arreglo.length-1; i++){
        const sumIzq = arreglo.slice(0, i).reduce((sum, a) => sum += a, 0);
        const sumDer = arreglo.slice(i+1, arreglo.length).reduce((sum, a) => sum += a, 0);
        if(sumIzq === sumDer) {
            return i;
        }
    }
    return undefined;
}

console.log('Indice Equilibrio', indiceEquilibrio([3, 4, 1, 2, 0]));
console.log('Indice Equilibrio', indiceEquilibrio([-2,5,7,0,3]));
