const arr = [1, 2, 5, 10, -10, 20, 54];

console.log(arr[0]);

const [uno, dos, tres, cuatro, ...resto] = arr;
console.log(uno, dos, tres, cuatro, resto);

const [...copia] = arr;

const copia2 = arr;

console.log(copia);

copia.push(1000);

copia2.push(9999);

console.log('ARR', arr);

console.log('COPIA', copia);

console.log('COPIA2', copia2);

const [, , tercero] = copia2;

console.log(tercero);


const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };

const { firstName: name, username, otro} = person;

console.log(name, username, otro);

const { addresses: [,{zipcode}] } = person;

console.log(zipcode);

console.log(person.addresses[1]);

const person2 = {...person};


const person3 = {
    firstName: person.firstName,
    lastName: person.lastName,
    email: person.email,
    password: person.password,
    username: person.username,
    addresses: person.addresses,
    createdAt: person.createdAt
}

console.log(person2);

person.firstName = 'Juanito';

console.log('PERSON', person);

console.log('PERSON2', person2);

if(person.firstName == person2.firstName) {
    console.log('son iguales');
} else {
    console.log('son distintos');
}


person.firstName == person2.firstName?console.log('son iguales'): console.log('son distintos');

person.firstName = undefined;

const nombre = person.firstName?person.firstName: 'No tiene nombre';

console.log(nombre);

const nombre2 = person.firstName??'No tiene monbre';

console.log(nombre2);