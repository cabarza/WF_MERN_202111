function orderSupplies(item) {
    return new Promise((resolve, reject) => {
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
            resolve({item: warehouse[item], deliveryTime: deliveryTime})
        }, deliveryTime);
    })
  }
  function receivedItem(item, deliveryTime) {
    console.log(`Received ${item.product}, time to ${item.directions()} en ${deliveryTime}`);
  }
  orderSupplies('brush').then(r => receivedItem(r.item, r.deliveryTime)).catch(e => console.log(e));
  orderSupplies('paint').then(resp => receivedItem(resp.item, resp.deliveryTime)).catch(e => console.log(e));

  console.log('TERMINO mi código');