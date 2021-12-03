// Desafio 1
function compareTrue(darthVader, anakinSkywalker) {
  if (darthVader === true && anakinSkywalker === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return((base * height) / 2); 
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName(array) {
  let primeiro = array[0];
  let ultimo = array[array.length -1];
  return `${ultimo}, ${primeiro}`;
  // referencia do template strings buscado no mdn https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let numerosOrdenados = []; // adicionar aqui os números ordenados
  let maiorNumero = []; // contar quantas vezes o maior número aparece e adicionar aqui
  for (index = 0; index < numerosOrdenados.length; index += 1) {
    numerosOrdenados++;
    //percorrer os números ordenados procurando quantas vezes o último index (-1) se repete e adicona na variavel maiorNumero com .push

  }
  return maiorNumero.length;
}

// Desafio 7
// referencia de Math.abs() retirado no MDN https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat2 - mouse) > Math.abs(cat1 - mouse)) {
    return "cat1";
  } else if (Math.abs(cat2 - mouse)  < Math.abs(cat1 - mouse)) {
    return "cat2";
  } else if (Math.abs(cat2 - mouse) === Math.abs(cat1 - mouse)) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let array = [];
  for (index = 0; index < numeros.length; index += 1) {

    if ((numeros[index] % 3 === 0) && (numeros[index] % 5 === 0)) {
      array.push("fizzBuzz");
    } else if ((numeros[index] % 3 === 0)) {
      array.push("fizz");
    } else if ((numeros[index] % 5 === 0)) {
      array.push("buzz");
    } else {
     array.push("bug!");
    }
  } 
  return array;
}   


// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
