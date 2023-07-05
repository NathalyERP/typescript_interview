import * as readline from 'readline';

// Crear una interfaz para leer desde el teclado
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para calcular la distancia entre cada carácter de la cadena y el carácter objetivo
function distanciaMasCorta(s: string, c: string): number[] {
  const distancias: number[] = []; // Arreglo para almacenar las distancias

  // Recorrer cada posición en la cadena
  for (let i = 0; i < s.length; i++) {
    let distancia = Infinity; // Valor inicial infinito para la distancia, actúa como marcador para la distancia más corta

    // Recorrer cada posición en la cadena nuevamente para buscar el carácter objetivo
    for (let j = 0; j < s.length; j++) {
      if (s[j] === c) { // Verificar si el carácter en la posición actual es igual al carácter objetivo
        const nuevaDistancia = Math.abs(i - j); // Calcula la distancia entre el índice actual y el índice objetivo

        if (nuevaDistancia < distancia) {
          distancia = nuevaDistancia; // Actualiza la distancia si es más corta
        }
      }
    }

    distancias.push(distancia); // Agrega la distancia al arreglo de distancias
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
