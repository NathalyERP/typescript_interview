import * as readline from 'readline';

// Crear una interfaz para leer la entrada del teclado
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function encontrarLongitudSubarregloMinimo(arr: number[], S: number): number {
  let longitudMinima = Infinity; // Inicializamos la longitud mínima como infinito
  let sumaVentana = 0; // Inicializamos la suma de la ventana en 0
  let inicioVentana = 0; // Puntero para el inicio de la ventana

  for (let finVentana = 0; finVentana < arr.length; finVentana++) {
    sumaVentana += arr[finVentana]; // Agregamos el elemento actual al sumatorio de la ventana

    while (sumaVentana >= S) {
      longitudMinima = Math.min(longitudMinima, finVentana - inicioVentana + 1); // Actualizamos la longitud mínima si es necesario
      sumaVentana -= arr[inicioVentana]; // Restamos el elemento al inicio de la ventana
      inicioVentana++; // Movemos el puntero de inicio de la ventana hacia adelante
    }
  }

  return longitudMinima === Infinity ? 0 : longitudMinima; // Devolvemos la longitud mínima encontrada o 0 si no se encontró ningún subarreglo
}


// Función auxiliar para leer una línea de la entrada
function obtenerEntrada(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(prompt, (respuesta) => {
      resolve(respuesta);
    });
  });
}

async function principal() {
  // Leer la matriz desde la entrada
  const entradaMatriz = await obtenerEntrada('Ingrese los números de la matriz separados por comas: ');
  const arr = entradaMatriz.split(',').map((numStr) => parseInt(numStr.trim(), 10));

  // Leer el número objetivo desde la entrada
  const entradaObjetivo = await obtenerEntrada('Ingrese el número objetivo: ');
  const objetivo = parseInt(entradaObjetivo, 10);

  // Encontrar la longitud del subarreglo más pequeño
  const longitudMinima = encontrarLongitudSubarregloMinimo(arr, objetivo);
  console.log('Longitud del subarreglo más pequeño:', longitudMinima);

  // Cerrar la interfaz de lectura
  rl.close();
}

// Ejecutar el programa principal
principal().catch((error) => console.error(error));
