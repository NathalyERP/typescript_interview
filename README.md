# typescript_interview
##Matricula: 2019-1174

## Problema 1 Amazon

Este problema fue pedido por Amazon. 

Existe una escalera con N escalones, y puedes subir 1 o 2 escalones a la vez. Dado N, escribe una función que devuelva el número de formas únicas en que puedes subir la escalera. El orden de los pasos importa. 

 Por ejemplo, si N es 4, entonces hay 5 formas únicas: 

1, 1, 1, 1 

2, 1, 1 

1, 2, 1 

1, 1, 2 

2, 2 

¿Qué pasaría si, en lugar de poder subir 1 o 2 escalones a la vez, pudieras subir cualquier número de un conjunto de enteros positivos X? Por ejemplo, si X = {1, 3, 5}, podrías subir 1, 3 o 5 escalones a la vez. 

Realiza un programa en Typescript que imprima por consola las formas únicas de subir las escaleras.  

**Solucion**

El problema consiste en determinar el número de formas únicas en las que se puede subir una escalera de N escalones, dado que se pueden subir 1 o 2 escalones a la vez. El orden de los pasos importa.

La solución propuesta utiliza programación dinámica para calcular el número de formas únicas. Se define un array dp donde dp[i] representa el número de formas únicas para subir i escalones.

El código utiliza la función combinacionesUnicasPasos para calcular el número de formas únicas para subir la escalera. La función utiliza un bucle for para iterar desde 2 hasta N, calculando el número de formas únicas en base a los valores previos almacenados en el array dp. Al finalizar, devuelve dp[N], que representa el número de formas únicas para subir N escalones.

**Big O**

La solución propuesta tiene una complejidad de tiempo de O(N) y una complejidad de espacio de O(N), donde N es el número de escalones.

El bucle for que calcula las combinaciones únicas ejecuta N iteraciones, por lo que la complejidad de tiempo es lineal con respecto al número de escalones.

El array dp tiene una longitud de N+1 y se utiliza para almacenar los resultados intermedios, por lo que la complejidad de espacio es proporcional al número de escalones.

## Problema 2 Uber

Uber preguntó recientemente el problema:  

Dada una cadena s y un carácter c, encuentre la distancia entre todos los caracteres de la cadena y el carácter c de la cadena s. Puede suponer que el carácter c aparecerá al menos una vez en la cadena. 

Aquí hay un ejemplo y un código de inicio: 

distancia_más_corta(s, c) 

- Complete esta la funcion anterior para que imprima por consola un arreglo con las distancias ejemplo:  

shortest_dist('helloworld', 'l') 

             

   h  e  l  l  o  w  o  r  l  d 

- [2, 1, 0, 0, 1, 2, 2, 1, 0, 1] 

   0  1  2  3  4  5  6  7  8  9 

**Solucion**

La solución propuesta consiste en iterar sobre cada carácter de la cadena s y calcular la distancia entre ese carácter y el carácter objetivo c. Se utiliza un arreglo distancias para almacenar las distancias resultantes.

La función distanciaMasCorta recibe la cadena s y el carácter objetivo c. Se inicializa un arreglo distancias vacío. A continuación, se obtiene el índice de la primera aparición del carácter c en la cadena s utilizando el método indexOf. Luego, se itera sobre cada carácter de la cadena s y se verifica si es igual al carácter objetivo. Si es igual, se agrega 0 al arreglo distancias, ya que la distancia entre ese carácter y el objetivo es 0. De lo contrario, se calcula la distancia utilizando la función Math.abs para obtener el valor absoluto de la diferencia entre el índice actual y el índice objetivo, y se agrega al arreglo distancias.

**Big O**

La solución propuesta tiene una complejidad de tiempo de O(N), donde N es la longitud de la cadena s. Esto se debe a que se realiza una iteración sobre cada carácter de la cadena para calcular las distancias. El método indexOf utilizado para encontrar el índice del carácter objetivo también tiene una complejidad de tiempo de O(N). En general, la complejidad de tiempo es lineal con respecto a la longitud de la cadena.

En cuanto a la complejidad de espacio, es O(N), ya que se utiliza un arreglo distancias de longitud igual a la longitud de la cadena s. El espacio requerido es proporcional a la longitud de la cadena.

## Problema 3 Facebook

Facebook preguntó recientemente el problema: (Slider Window) 

Dada una matriz de números positivos y un número positivo 'S', encuentre la longitud del subarreglo contiguo más pequeño cuya suma es mayor o igual que 'S'. Retorna 0, si no existe tal subarreglo 

Input: [2, 1, 5, 2, 3, 2], S=7  

Output: 2 

Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [5, 2]. 

Input: [2, 1, 5, 2, 8], S=7  

Output: 1 

Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [8]. 

Nota: No puedes usar ciclos anidados para resolver el problema.  

**Solucion**

La solución propuesta utiliza la técnica del "Sliding Window" (Ventana Deslizante) para encontrar el subarreglo de suma mínima.

La función encontrarLongitudSubarregloMinimo recibe una matriz arr y un número objetivo S. Se inicializan las variables longitudMinima y sumaVentana como infinito y 0, respectivamente. También se tiene un puntero inicioVentana para marcar el inicio del subarreglo.

Luego, se itera sobre la matriz utilizando un puntero finVentana que se desplaza hacia la derecha. En cada iteración, se agrega el elemento actual al sumatorio de la ventana (sumaVentana). A continuación, se verifica si sumaVentana es mayor o igual que S. En ese caso, se actualiza la longitudMinima si es necesario y se realiza un desplazamiento de la ventana hacia la derecha, restando el elemento al inicio de la ventana (sumaVentana -= arr[inicioVentana]) y moviendo el puntero inicioVentana hacia adelante.

Al finalizar, se devuelve la longitudMinima encontrada. Si longitudMinima sigue siendo infinito, significa que no se encontró ningún subarreglo que cumpla la condición, por lo que se retorna 0.

**Big O**

La solución propuesta tiene una complejidad de tiempo de O(N), donde N es la longitud de la matriz arr. Esto se debe a que se realiza una iteración sobre cada elemento de la matriz utilizando los punteros inicioVentana y finVentana. El número de operaciones realizadas es proporcional al tamaño de la matriz, por lo que la complejidad de tiempo es lineal.

En cuanto a la complejidad de espacio, es O(1), ya que no se utiliza espacio adicional que crezca con el tamaño de la entrada. Solo se utilizan algunas variables para mantener el estado de la ventana deslizante.


