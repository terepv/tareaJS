// 1.- Mostrar en consola la secuencia de Fibonacci: 
// a. Entre los números 0 y 1000.
// b. Números pares entre 0 y 1000.
// c. Números impares entre 0 y 1000.

// a. Secuencia de Fibonacci hasta 1000
console.log("Secuencia de Fibonacci entre 0 y 1000:");
let a = 0, b = 1; // la secuencia empieza aquí
while (a <= 1000) { // ciclo while que se ejecutará en cuanto la condicion determinada se cumpla 
    console.log(a); //imprime el numero de fibonacci
    let temp = a; // toma como variable temporal el resultado de a
    a = b;
    b = temp + b;  // se calcula la secuencia con recursividad actualizando los valores para a y b
}

// b. Números pares entre 0 y 1000
console.log("\nNúmeros pares entre 0 y 1000:");
for (let i = 0; i <= 1000; i++) { // ciclo for para recorrer los numeros (representado por i incrementando en 1) con la condición de que sea 0 o mayor hasta 1000 inclusive
    if (i % 2 === 0) { // Verifica la condición de que el numero sea divisible por 2 y que el residuo sea exacto 0 (por eso la igualdad estricta)
        console.log(i); // imprime el numero en cuanto la condición anterior sea verdadera
    }
}

// c. Números impares entre 0 y 1000
console.log("\nNúmeros impares entre 0 y 1000:"); 
for (let i = 0; i <= 1000; i++) { // el ciclo parte de la misma condición que el anterior
    if (i % 2 !== 0) { // Pero se verifica la condición de que el numero (i) al ser dividio por 2, sea diferente de 0 
        console.log(i); // imprime el numero en cuanto la condición anterior sea verdadera
    }
}

// 2.- Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.

let pokEmon = [ // array original, puse mayuscula a "pokEmon" para no generar conflicto con el siguiente ejercicio
   'Pikachu',
   'Charmander',
   'Bulbasaur',
   'Squirtle'
];

// Convertir los nombres a mayúsculas
let pokemonesMayusculas = pokEmon.map(function(nombre) { // se usa map para aplicar una función al array original, creando un nuevo array y se define que los elementos del array original se representan por "nombre"
    return nombre.toUpperCase(); // se toman los nombres y se le aplica la función toUpperCase de js para transformarlos a mayusuclas y retornar el nuevo array
});

// Mostrar el arreglo con los pokemones escritos en mayusculas
console.log(pokemonesMayusculas); 


// 3.- Del siguiente arreglo de objetos, retornar otro arreglo con los pokemon tipo fuego.

let pokemon = [ // array original
    { nombre: 'Pikachu', tipo: 'Electrico' },
    { nombre: 'Charmander', tipo: 'Fuego' },
    { nombre: 'Bulbasaur', tipo: 'Planta' },
    { nombre: 'Squirtle', tipo: 'Agua' },
    { nombre: 'Charmeleon', tipo: 'Fuego' },
    { nombre: 'Weedle', tipo: 'bicho' },
    { nombre: 'Charizard', tipo: 'Fuego' }
];

// Se filtran los pokemones tipo fuego con función flecha 
let pokemonFuego = pokemon.filter(poke => poke.tipo === 'Fuego'); // se define que los pokemon fuego estan representados por poke, cuyo tipo sea fuego

// Mostrar el nuevo array filtrado que muestra solo pokemones tipo fuego
console.log(pokemonFuego);

