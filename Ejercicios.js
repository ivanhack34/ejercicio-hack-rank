//1-Completa con una funcion la suma de 2 enteros

/*function solveMeFirst(a, b) {
  // Hint: Type return a+b below
     let sum;
     sum = a + b;
     return sum;
}

console.log(solveMeFirst(5, 4)); 
*/

//2-En una funcion hacer una suma de los elementos de un array

/*
array = [1,2,3,4,5]

function simpleArraySum(ar) {
  // Write your code here
  let sum = 0; 
  //Ingreso el valos donde se hara la suma iterada
  let inicialSum = ar.reduce((valorPrevio, valorActual) => valorPrevio + valorActual,
  sum); 
  //Luego creo un valor inicialSum con la cual usando el parametro ar y el reduce que usando el valor de izquieda a derecha
  //Suma de forma iterada don la funcion flecha (=>) donde se acumula en sum para el arreglo
  return inicialSum; 
  //Finalmente en la funcion muesta la respuesta de la iteracion de inicial sum 
}

console.log(simpleArraySum(array)); //Muestro la funcion con su argumento y hay se muestra la respuesta en node.js o consola 
*/