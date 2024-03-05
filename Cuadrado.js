/* Cuadrado: Realiza un programa el cual dadas 4 coordenadas sobre un plano
 cartesiano (x,y), determine si las coordenadas forman un cuadrado.*/
let instrucciones = alert(
  "A continuación ingrese las coordenadas en X, y en Y de cada punto. ⚠️El orden para ingresar los puntos debera ser en sentido horario o contraorario⚠️"
);
// Se solicitan al usuario las coordenadas de cada punto y se convierte a numero..
let x1 = Number(prompt("Ingrese la coordenada en X del punto 1"));
let y1 = Number(prompt("Ingrese la coordenada en y del punto 1"));
let x2 = Number(prompt("Ingrese la coordenada en X del punto 2"));
let y2 = Number(prompt("Ingrese la coordenada en y del punto 2"));
let x3 = Number(prompt("Ingrese la coordenada en X del punto 3"));
let y3 = Number(prompt("Ingrese la coordenada en y del punto 3"));
let x4 = Number(prompt("Ingrese la coordenada en X del punto 4"));
let y4 = Number(prompt("Ingrese la coordenada en y del punto 4"));

const coordenadas = [
  [x1, y1],
  [x2, y2],
  [x3, y3],
  [x4, y4],
];
const esCuadrado = (...coordenadas) => {
  // Se obtienen las distancias de 3 de los 4 lados, suficiente para determinar que es un cuadrado.
  let dist12 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  let dist14 = Math.sqrt((x4 - x1) ** 2 + (y4 - y1) ** 2);
  let dist43 = Math.sqrt((x4 - x3) ** 2 + (y4 - y3) ** 2);

  // Validando que al menos 3 lados tengan la misma longitud para determinar que es un cuadrado .
  // Tambien se valida que los puntos no queden en la misma posición ya que se puede interpretar
  // Erroneamente al tener todos los lados distancia 0 y pasaria la primera validación.
  return (dist12 === dist14) &
    (dist12 === dist43) &
    (dist12 !== 0) &
    (dist14 !== 0) &
    (dist43 !== 0)
    ? "Las coordenadas forman un cuadrado ✅"
    : "Las coordenadas no forman un cuadrado ❌";
};

alert(esCuadrado(...coordenadas));
