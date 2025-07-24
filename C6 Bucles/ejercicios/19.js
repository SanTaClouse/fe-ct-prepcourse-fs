function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var sumHasN = 1
  if (n > 1) {
    for (var i = 1 ; i < n ; i++){
      sumHasN += i +1
  }
  return sumHasN
}
}
module.exports = sumarHastaN;
