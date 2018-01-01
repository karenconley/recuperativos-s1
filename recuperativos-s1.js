/*
PROBLEMA DIFÍCIL Nº4 (50 ptos)

Dado un arreglo de números positivos, encontrar el elemento más pequeño y retornar su índice
*/

//variable con números a usar
var arr = [45, 33, 108, 7, 73, 22];
//variable que contiene función 'Math.min' que busca el nº menor de un array
var menor = Math.min(...arr);
//se crea la función "number"
function number(num){
	return num === menor;
};
//se imprime el resultado
console.log(arr.findIndex(number));




/*
PROBLEMA MEDIO Nº8 (30 ptos)

Dado un arreglo y un número, retornar el índice (posición) del número
*/

//variable con números a usar
var arr = [7, 22, 73, 101, 88, 3];
//variable con index.Of del número que se quiere buscar
var i = arr.indexOf(88);
//se imprime el resultado
console.log(i)




/*
PROBLEMA MEDIO Nº9 (30 ptos)

Dados dos arreglos, devolver un nuevo arreglo que contenga la suma de los índices de cada array,
arr1[índice 0] + arr2[índice 0] = nuevoArr[indice 0]
*/

//variable números array 1
var arr1 = [12, 5, 3, 7];
//variable números array 2
var arr2 = [3, 20, 30, 8];
//variable para el resultado
var result = [];

for(i = 0; i < arr1.length; i++){
	//resultado = la suma de i del primer array y de i del 2do array
	result[i] = arr1[i] + arr2[i];
}
console.log(result);




/*
PROBLEMA MEDIO Nº10 (30 ptos)

Un grupo de amigos va a un evento y sus nombres están dentro de un arreglo.
Escribir una función donde dado el nombre de la persona puedas retornar el asiento que le toca.
La numeración comienza en 1, si la persona no tiene asiento retornar 0.
*/

//se crea la función "asiento"
function asiento (name){
	//se declara una variable con los nombres
	var names = ["Allison", "Belén", "Nadia", "Marcia", "Ale", "Fabián"];
	//se recorre mediante un for
	for(var i = 0; i < names.length; i++){
		if(names[i] === name) {
			//si el nombre del arreglo corresponde al nombre ingresado retorna el nº del asiento (index + 1)
			return i+1;
		}
	}
	//si no tiene asiento, retorna 0
	return 0;
}
//se imprime el resultado probando el nombre "Nadia"
console.log(asiento("Nadia"));




/*
PROBLEMA FÁCIL Nº12 (20 ptos):

Realizar un programa que permita analizar si una palabra que el usuario introduce
por teclado es palíndroma o no. Si es palíndroma debe retornar true, en caso contrario false.
*/

function palindrome(word){
	//se declara variable 'long' que contenga el nº de caracteres de 'word'
	var long = word.length;
	for(var i = 0; i < long; i++){
		if(word[i] !== word [long - 1 - i]){
			return false;
		}
	}
	return true;
}
//se imprime el resultado probando con la palabra 'ana'
console.log(palindrome("ana"))

