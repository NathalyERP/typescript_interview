import * as readline from 'readline';

// Crear una interfaz para leer desde el teclado
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para calcular la distancia entre cada carácter de la cadena y el carácter objetivo
function distanciaMasCorta(s: string, c: string): number[] {
  const distancias: number[] = []; // Arreglo para almacenar las distancias
  const indiceObjetivo = s.indexOf(c); // Índice de la primera aparición del carácter objetivo en la cadena

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      distancias.push(0); // Agrega 0 al arreglo distancias si el carácter es igual al objetivo (distancia 0)
    } else {
      const distancia = Math.abs(i - indiceObjetivo); // Calcula la distancia entre el índice actual y el índice objetivo
      distancias.push(distancia); // Agrega la distancia al arreglo distancias
    }
  }

  return distancias; // Devuelve el arreglo de distancias
}

// Preguntar por la cadena s y el carácter c
rl.question('Ingresa la cadena: ', (s: string) => {
  rl.question('Ingresa el carácter: ', (c: string) => {
    // Llamar a la función distanciaMasCorta con los valores ingresados
    const distancias = distanciaMasCorta(s, c);
    console.log(distancias);

    // Cerrar la interfaz de lectura desde el teclado
    rl.close();
  });
});
