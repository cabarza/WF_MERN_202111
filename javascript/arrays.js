const x = Object.freeze([1]);

const x2 = [...x];
x2.push(2);

console.log(x2);

const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
  ]);

const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];

console.log(needThyme);

const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];

console.log(gotTheThyme);

const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];

console.log(notNeceCelery);


const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);

console.log([...items].sort());

// map -> transformar el array original en un nuevo array

console.log(notNeceCelery.map(e => e.item));

// filter -> Obtener un subconjunto del arreglo original

console.log(notNeceCelery.filter(e => e.haveIngredient).map(e => e.item));

// find -> Encontrar el primer elemento que cumpla la condicion

console.log(notNeceCelery.find(e => e.haveIngredient));

//findIndex -> igual al find, pero devuelve su posición

console.log(notNeceCelery.findIndex(e => e.haveIngredient));

//reduce -> reducir el arreglo a un valor

console.log(notNeceCelery.reduce((cuantos, e) => {
    if(!e.haveIngredient){
        cuantos++;
    }
    return cuantos;
}, 0));

notNeceCelery.forEach((e, i) => {
    console.log(e, i);
})