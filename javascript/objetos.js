const a = {
    nombre: 'Juan',
    apellido: 'XYZ'
};


b = a;

b.edad = 30;

console.log(a);

c = {...b}

c.direccion = 'Esta calle';


console.log(a);
console.log(c);

