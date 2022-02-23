const matriz = [[1,2,3,4],[4,3,2,1],[7,6,5,4]];

for(let i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
    for(let j = matriz[i].length-1; j >= 0; j--) {
        console.log(matriz[i][j]);
    } 
}


function parametrosPorValor(param1, param2) {
    param1 += param2;

    return param1;
}

function parametrosPorValorYReferencia(param1, param2, arreglo) {
    param1 += param2;
    arreglo.push(param1);

    // arreglo = arreglo.map(a => a * param1);
    console.log('ARREGLO EN FUNCIÓN', arreglo);
    return param1;
}

function parametrosPorValorYReferenciaObj(param1, param2, objeto) {
    param1 += param2;
    objeto.valor = param1;
    return param1;
}

let p1 = 100;
let p2 = 12;

console.log('SALIDA 1: ', parametrosPorValor(p1, p2));

console.log('SALIDA 2: ', p1);


let arr1 = [1, 2, 3, 4];

console.log('SALIDA 3: ', parametrosPorValorYReferencia(p1, p2, arr1));

console.log('SALIDA 4: ', arr1);


const obj = {
    nombre: 'NN'
};

console.log('SALIDA 5: ', parametrosPorValorYReferenciaObj(p1, p2, obj));

console.log('SALIDA 6: ', obj);
