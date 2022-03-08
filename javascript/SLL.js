class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    agregarElementoAlComienzo(valor) {
        const nodo = new Nodo(valor);
        nodo.siguiente = this.head;
        this.head = nodo;
        return this;
    }

    agregarElementoAlFinal(valor) {
        const nodo = new Nodo(valor);
        const nodoPadre = this.buscarUltimoNodo(this.head);
        if(!nodoPadre) {
            this.head = nodo;
        } else {
            nodoPadre.siguiente = nodo;
        }
        return this;
    }

    mostrarLista() {
        let nodo = this.head;
        while(nodo) {
            console.log(nodo.valor);
            nodo = nodo.siguiente;
        }
    }

    buscarUltimoNodo(nodo) {
        if(nodo && nodo.siguiente) {
            return this.buscarUltimoNodo(nodo.siguiente);
        } 
        return nodo;
    }

    eliminarDelComienzo() {
        this.head = this.head?.siguiente;
        return this;
    }

    cabecera() {
        console.log(this.head?.valor);
    }

}

const sll = new SLL();
sll.eliminarDelComienzo();
sll.cabecera();


sll.agregarElementoAlComienzo(10);
sll.agregarElementoAlComienzo(20);
sll.agregarElementoAlComienzo(30);
sll.agregarElementoAlComienzo(10);
sll.eliminarDelComienzo();
sll.cabecera();

sll.mostrarLista();

console.log('-------')

const sll2 = new SLL();
sll2.agregarElementoAlFinal(10);
sll2.agregarElementoAlFinal(20);
sll2.agregarElementoAlFinal(30);
sll2.agregarElementoAlComienzo(1);
sll2.mostrarLista();

sll2.eliminarDelComienzo();
sll2.cabecera();

console.log('-------')

// const valor = prompt('Agregar nuevo elemento');
// sll2.agregarElementoAlComienzo(+valor);


// const mostrar = confirm('Mostrar Lista');
// if(mostrar) { 
//     sll2.mostrarLista();
// }
// console.log('Chao');


for(let i=10; i<100; i++) {
    console.log(i);
    console.log(i+1);
}