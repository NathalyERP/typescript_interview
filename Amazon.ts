// Importar el módulo readline para leer la entrada del usuario desde la consola
import readline from 'readline';

// Crear una interfaz readline con la entrada y salida configuradas
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que calcula el número de formas únicas para subir la escalera
function combinacionesUnicasPasos(N: number, pasos: number[]): number {
  const dp: number[] = [];
  dp[0] = 1;

  // Calcular las combinaciones únicas utilizando programación dinámica
  for (let i = 1; i <= N; i++) {
    dp[i] = 0;
    for (const paso of pasos) {
      if (i >= paso) {
        dp[i] += dp[i - paso];
      }
    }
  }

  return dp[N];
}

// Función que imprime el resultado del número de formas únicas
function imprimirCombinacionesUnicasPasos(N: number, pasos: number[]): void {
  const combinaciones = combinacionesUnicasPasos(N, pasos);
  console.log(`El número de formas únicas para subir la escalera es: ${combinaciones}`);
}

// Solicitar al usuario el número de escalones
rl.question('Ingrese el número de escalones: ', (N: string) => {
  const numEscalones = parseInt(N, 10);

  // Solicitar al usuario los tamaños de los pasos separados por comas
  rl.question('Ingrese los tamaños de los pasos separados por comas: ', (inputPasos: string) => {
    // Convertir los tamaños de los pasos a un array de números
    const pasos = inputPasos.split(',').map(paso => parseInt(paso.trim(), 10));

    // Llamar a la función para imprimir el resultado
    imprimirCombinacionesUnicasPasos(numEscalones, pasos);

    // Cerrar la interfaz readline
    rl.close();
  });
});
