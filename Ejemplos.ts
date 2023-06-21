/*
Todos los valores en JavaScript tienen un conjunto de comportamientos observables al ejecutar diferentes operaciones.
Los comportamientos de cada operación dependen del valor que se tenga en primer lugar.
Es común no conocer el valor de una variable y, por lo tanto, no se puede predecir con certeza el resultado de ejecutar cierto código.
JavaScript tiene escritura dinámica, lo que significa que se ejecuta el código para determinar su comportamiento.
La alternativa a la escritura dinámica es el uso de un sistema de tipo estático, como TypeScript, que permite hacer predicciones sobre el código antes de ejecutarlo.
Un sistema de tipo estático como TypeScript puede detectar errores antes de la ejecución del código.
TypeScript proporciona herramientas para verificar tipos, editar código y ofrecer sugerencias de completado.
El compilador de TypeScript, tsc, transforma los archivos TypeScript en archivos JavaScript.
El compilador de TypeScript puede detectar errores de tipo y emitir un código limpio y legible.
Se pueden especificar tipos explícitos en TypeScript utilizando anotaciones de tipo.
Es posible introducir errores de verificación de tipos al migrar código JavaScript a TypeScript.
TypeScript no interfiere con la ejecución del código JavaScript existente, pero ofrece la opción de ser más estricto con los errores de tipo.
Con anotaciones de tipo, TypeScript puede proporcionar información sobre el uso incorrecto de funciones.

*/

// Mensajes declaración y uso de una variable
let message: string;
message = "Hello, TypeScript!";
console.log(message);

// Ejemplo de interfaz
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John",
  age: 25,
};

console.log(user.age);

// función con parámetros y tipo de retorno
function addNumbers(a: number, b: number): number {
  return a + b;
}

const result = addNumbers(5, 10);
console.log(result);

// función con múltiples parámetros y tipos diferentes
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());

//tipos de unión

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }
  
  /*
  //Tipo de alias
  type Point = {
    x: number;
    y: number;
  };
  
  // Exactly the same as the earlier example
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  */
  
  printCoord({ x: 200, y: 100 });
  
  //interfaces
  interface Point {
    x: number;
    y: number;
  }
   
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 200 });
  
  
  