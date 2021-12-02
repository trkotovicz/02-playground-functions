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
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numero, contador) {
  for (let vezesAparece = 0; vezesAparece < numero.length; vezesAparece += 1) {
    if (numero[vezesAparece] === contador) {
      contador++
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return cat2;
  } else if ((cat1 - mouse) > (cat2 - mouse)) {
    return cat1;
  } else if ((cat1 - mouse) === (cat2 - mouse)){
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
