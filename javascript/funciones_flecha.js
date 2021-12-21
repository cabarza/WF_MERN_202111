function suma(p1, p2) {
    return p1 + p2;
}

const suma2 = (p1, p2) => {
    return p1 + p2;
}

console.log(suma(10, 2));

console.log(suma2(10, 2));


const arr = ['Uno', 2, 10, 'Veinte'];

const funcionMap = (e, i) => {
    if(typeof e == 'number') {
        return e ** i;
    } else {
        return e + '_' + i;
    }
}

const arr2 = arr.map(funcionMap);

console.log(arr2);


function orderSupplies(item, callback) {
    let warehouse; //undefined
    const deliveryTime = Math.random() * 3000;
    setTimeout(() => {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: () => 'mix it!'
        },
        brush: {
          product: 'Horsehair brush',
          directions: () => 'start painting!'
        }
      };
      callback(warehouse[item], deliveryTime);
    }, deliveryTime);
  }
  function receivedItem(item, deliveryTime) {
    console.log(`Received ${item.product}, time to ${item.directions()} en ${deliveryTime}`);
  }
  orderSupplies('brush', receivedItem);
  orderSupplies('paint', receivedItem);
