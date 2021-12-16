const persona = {
    nombre: 'Juanito',
    apellido: 'Perez',
    edad:25,

    direcciones: [
        {
            calle: 'Calle 1',
            numero: '4A',
            ciudad: 'Valparaíso',
            pais: 'Chile'
        },
        {
            calle: 'Av. Palotes',
            numero: 'Sin Número',
            ciudad: 'Santiago',
            pais: 'Chile'
        }, 
        32
    ]
}


console.log(persona);

console.log('Nombre: ', persona.nombre);

console.log('DIRS', persona.direcciones[0]);

for(let dir of persona.direcciones) {
    console.log(dir.calle);
}

for(let i = 0; i < persona.direcciones.length; i++) {
    console.log(persona.direcciones[i].ciudad);
}

persona.direcciones.forEach(d => console.log(d.numero));

var users = [{name: "Michael", age:37}, {name: "John", age:13}, {name: "David", age:27}];

for(let u of users) {
    if(u.age >= 18) {
        console.log(`${u.name} es mayor de edad`)
    }
}


// & 

// &&


// true && true && true = true

// true && false && true = false

// false && true = false

// |

// || 

// true || true || true = true

// true || false || true = true

// false || true || false = true


// (true && false ) || !(25 > 10) || (10*10 == 10) = false
//      F                  F           F
//             F

