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
// Obtive ajuda na resolução do exercício no estudo em grupo de sábado, estava errando no segundo for e não passava por alguns erros de digitação
function highestCount(array) {
  let arrayNumeros = array[0]; //acha o maior número e armazena aqui
  let maiorNumero = 0; //verifica quantas vezes o maior número aparece

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > arrayNumeros) {
      arrayNumeros = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (arrayNumeros === array[index]) {
      maiorNumero += 1;
    }
  }
  return maiorNumero;
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
function encode(arrayLetras) {   
  let code = "";

  for (let index = 0; index < arrayLetras.length; index += 1) {
    switch (arrayLetras[index]) {
      case "a" : 
        code += "1";
      break;
      case "e" :
        code += "2";
      break;
      case "i" :
       code += "3";
      break;
      case "o" :
        code += "4";
      break;
      case "u" :
        code += "5";
      break;
      default:
        code += arrayLetras[index];
    }
  }
  return code;
}

function decode(code) {
  let uncode = "";

  for (let index = 0; index < code.length; index += 1) {
    switch (code[index]) {
      case "1" : 
        uncode += "a";
      break;
      case "2" :
        uncode += "e";
      break;
      case "3" :
       uncode += "i";
      break;
      case "4" :
        uncode += "o";
      break;
      case "5" :
        uncode += "u";
      break;
      default:
        uncode += code[index];
    }
  }
  return uncode;
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
