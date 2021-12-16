const arreglo = [1, 2, 10, 4, 7, 20, -10, 11, 4];
const arr1 = [];

console.log(arreglo);

arr1.push('Nuevo Valor');

// arr1 = ['Nuevo valor'];

console.log(arr1);

const arr2 = [];
for(let i=0; i<arreglo.length; i++){
    if(arreglo[i] >= 10) {
        arr2.push(arreglo[i]);
    }
}

console.log(arr2);

console.log( arreglo.filter(a => a>=10) );

console.log( arreglo.find(a => a>=10) );

console.log( arreglo.findIndex(a => a>=10) );

console.log( arreglo.map(a => {
    console.log(a);
    return a**2
}));

console.log( arreglo.map((a, i) => {
    return {
        indice: i,
        valor: a
    }
}));


console.log( arreglo.reduce((suma, a )=> suma += a, 0) )