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
/* O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. Usando o espaço vazio (" ") como parâmetro para o split, o código irá percorrer minha string e procurar todo lugar com espaço e dividir a string nesses pontos. (Ex: "Olá mundo" / o .split(" ") irá retornar um array de strings ["Olá", "mundo"])
Referência MDN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName(array) {
  let primeiro = array[0];
  let ultimo = array[array.length -1];
  let concat = ultimo + ", " + primeiro;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
// Obtive ajuda na resolução do exercício no estudo em grupo, estava errando no segundo for e não passava por alguns erros de digitação
function highestCount(array) {
  let maiorNumero = array[0]; //na posição 0 pq ele precisa começar na primeira posição, independente do valor dele ?
  let vezesNumero = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) { //se o array no index for maior que o maiorNumero, ele é o maior número.. mas como a gente sabe que ele é o maior número em si?
      maiorNumero = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero === array[index]) {
      vezesNumero += 1;
    }
  }
  return vezesNumero;
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
