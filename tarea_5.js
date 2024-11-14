// Función para calcular la suma de las notas
function sumaNotas(notas) { // se define la función para sumar las notas tomando las notas como un arreglo
  let suma = 0; // declara la variable suma que comienza en 0, al no tener elementos sumados
  for (let nota of notas) { // recorrer el array de notas para asignarlo a nota
    suma += nota;  // agrega los valores de nota a la suma
  }
  return suma; //devuelve la suma de notas
}

// Función para obtener el promedio de las notas
function promedioNotas(notas) { // se define la funcion de promedio de las notas, tomando las notas como parametros
  const suma = sumaNotas(notas); // toma la constante de suma de notas generada en el arreglo anterior
  const promedio = suma / notas.length; // se define que el cálculo del promedio es la suma dividido el largo del arreglo
  return promedio; // devuelve el promedio
}

// Ejemplo de uso y pruebas en consola
const notas = [6, 8, 9, 2, 5, 10]; // arreglo de notas de la tarea [6,8,9,2,5,10]
console.log("Suma de notas:", sumaNotas(notas)); // se llama a la función de sumaNotas y toma el arreglo anterior para conseguir el resultado: Suma de notas correcta= 40
console.log("Promedio de notas:", promedioNotas(notas)); // se llama a la función promedioNotas el cual usa sumaNotas y el largo del arreglo (notas) para calcular el resultado: Promedio de notas correcto= 40/6 = 6,666...
