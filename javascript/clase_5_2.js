

// console.log('VAR1', var1);

// const var2 = 'Hola a todos';
// console.log('VAR2', var2);


// let var3 = 30;
// console.log('VAR3', var3);

// var1 = 'Cambie su valor';
// console.log('VAR1', var1);

// var3 = 100;
// console.log('VAR3', var3);

// var var1 = 1000;
// console.log('VAR1', var1);


// console.log('VAR2', var2);

// console.log(suma(10, 20));

// let a = 1;
// let b = 10;

// console.log(suma(b, a));

// function suma(a, b) {
//     return a + b;
// }

// const suma2 = (a, b) => {
//     return a + b;
// } 

// console.log(suma2(100, 200));

function sumatoria(n) {
    var suma = 0;
    var i = 1000;
    for(var i = 0; i<=n; i++) {
        suma += i;
        console.log('i', i);
    }
    console.log('Final', i);
    return suma;
}


console.log(sumatoria(5));