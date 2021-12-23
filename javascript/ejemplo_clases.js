class Persona {

    amigos = [];

    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    agregarAmigo(amigo) {
        this.amigos.push(amigo);
    }

    mostrarAmigos() {
        console.log(`${this.nombre}:`);
        console.log(this.amigos);
    }
}

class Joven extends Persona {
    constructor(nombre, email, edad, amigos){
        super(nombre, email);
        this.edad = edad;
        this.amigos = amigos;
    }

    mostrarAmigos(){
        console.log('Los amigos de ' + this.nombre + ' son ');
        console.log(this.amigos);
    }

}


const p1 = new Persona('Juanito', 'juanito@email.com');
const p2 = new Persona('María', 'maria@email.com');
const p3 = new Persona('carlos', 'carlitos@email.com');
const p4 = p1;

p4.agregarAmigo(p2);

p2.nombre = 'Marilú';

p1.mostrarAmigos();
p2.mostrarAmigos();

const j1 = new Joven('Esteban', 'esteban@email.com', 12, [p1, p2]);
const j2 = new Joven('Pedro', 'pedrito@email.com', 15, [p1, p2, p3]);

j2.mostrarAmigos();

j2.agregarAmigo(j1);

j2.mostrarAmigos();

console.log(p1 instanceof Persona);

console.log(p1 instanceof Joven);

console.log(j1 instanceof Persona);

console.log(j1 instanceof Joven);


console.log(typeof p1);

console.log(typeof j1);

console.log(typeof 1);

console.log(typeof '1');

console.log(typeof []);

const x = () => console.log('Hola');

console.log(typeof x);


