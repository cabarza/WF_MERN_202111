console.log(1 + 2 + "3" + "4" + 5 + 6);


const obj = {
    nombre: 'Juan',
    apellido: 'Soto',
    direccion: 'Bla'
}

console.log(obj.nombre);

for(let propiedad in obj) {
    console.log(propiedad+ "=" + obj[propiedad]);
}


const array = [1,2,3,4,5,6];

console.log([0, ...array]);