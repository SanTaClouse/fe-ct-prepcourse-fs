function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:  
  //arr.find(callback(element[, index[, array]])[, thisArg])
  return array.find((string) => string.length >= 5); 
}

module.exports = obtenerPrimerStringLargo;
