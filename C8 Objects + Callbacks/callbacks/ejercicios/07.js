function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var capital = arrayOfStrings.filter((element) => element[0] === 'a');
   return capital
}

module.exports = filter;
