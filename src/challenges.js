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
  let arrayNumeros = array[0];
  let maiorNumero = 0;

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
  let vogais;
  
  for (let index = 0; index < arrayLetras.length; index += 1) {
    switch (arrayLetras[index]) {
      case "a" :
        vogais.push(1);
      break;
      case "e" :
        vogais.push(2);
      break;
      case "i" :
        vogais.push(3);
      break;
      case "o" :
        vogais.push(4);
      break;
      case "u" :
        vogais.push(5);
      break;
    }
  }
  return vogais;
 
  // let resultado = arrayLetras.replace(/a/g, "1").replace(/e/g, "2").replace(/i/g, "3").replace(/o/g, "4").replace(/u/g, "5");
  
  // return resultado;
  
}
function decode(arrayNumeros) {
  
}
// console.log(encode("how are you today?"));
// console.log(decode("h4w 1r2 y45 t4d1y?")); //console log funciona mas só passa em um dos testes do npm

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
