function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var mayor = array[0];
  var indexMayor = 0;

array.forEach((x, i) => {
  if (x > mayor){
    mayor = x
    indexMayor = i}
    });
  return indexMayor;
}

module.exports = encontrarIndiceMayor;
