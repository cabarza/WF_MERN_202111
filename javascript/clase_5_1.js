function removerRango(arr, desde, hasta) {
    if(arr && arr.length >= hasta && desde < hasta) {
        arr.splice(desde, 1+hasta-desde);
        return arr;
    } 
    return Error('Parámetros inválidos');
}


const arreglo = removerRango([20,30,40,50,60,70], 2,4); 
console.log(arreglo);