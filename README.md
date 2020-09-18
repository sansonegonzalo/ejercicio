EJERCICIO 1.
Escribir un programa en React.js que recorra un arreglo y genere un histograma en base a
los números de este. El arreglo se llama myArray y contiene 10 elementos que corresponden a números
enteros del 1 al 5.
Un histograma representa que tanto un elemento aparece en un conjunto de datos (Debe mostrar la
frecuencia para todos los números del 1 al 5, incluso si no están presentes en el arreglo).
Por ejemplo, para el arreglo: myArray:=(1,2,1,3,3,1,2,1,5,1) el histograma se vería así:

1: *****
2: **
3: **
4:
5: *

Nota: Asegúrese de que los resultados se impriman exactamente como aparecen aquí, ya que incluso un
espacio faltante o sobrante puede marcar la pregunta como incorrecta (Notar espacio entre los ":" y el
primer asterisco).
var myArray = [1,2,1,3,3,1,2,1,5,1];


EJERCICIO 2.
Escribir un programa utilizando React.js que imprima una X construida a base de la letra X
y utilizar el carácter de subrayado como espacio. El tamaño de la X se basa en una variable n que
indicará el tamaño de la letra para imprimir (en una matriz de n x n). Por ejemplo, para n: = 5 se
obtiene:

X___X
_X_X_
__X__
_X_X_
X___X

y para n:=6 se obtiene:

X____X
_X__X_
__XX__
__XX__
_X__X_
X____X

Si n es igual a cero imprimir "ERROR"
Nota: Tenga en cuenta que el código debe imprimir los resultados exactamente como se muestra con el fin
de que la pregunta sea considerada valida durante la prueba (El caracter "X" en mayúscula y el guion bajo
"_" para los espacios)
var n = 5;
REQUERIMIENTOS:
1. Crear un componente en React en el cual se pueda insertar el Array y traiga el resultado del
EJERCICIO 1.
2. Crear un componente en React en el cual se pueda insertar el tamaño de la letra y traiga el
resultado del EJERCICIO 2.
