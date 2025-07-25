function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var rand = Math.round(Math.random() * (array.length - 1) + 1)
   return array.at(rand - 1);
}

module.exports = obtenerElementoAleatorio;
