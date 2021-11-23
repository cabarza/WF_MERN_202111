function sumar(x) {
    let suma = 0;
    for(let i = 0; i<=x; i++) {
        suma += i;
        console.log('Número:', i, 'Suma: ', suma);
    }
    return suma;
}

sumar(255);


var msg = 'codingdojo';
for(var x = 2; x < msg.length - 4; x+=1) {
    if(msg.length == 7) { 
        for (var i = 0; i < 8; i++) {
            console.log(i);
        }
    } else {
        for (var i = msg.length; i > (msg.length - 3); i-=3) {
             console.log(i); 
        }
    }
}