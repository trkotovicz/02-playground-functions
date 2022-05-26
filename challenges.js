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
  let concat = ultimo + ", " + primeiro;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0]; 
  let vezesNumero = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) { 
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

// Desafio 10
function techList(tech, name) {
  let arrayTecnologias = [];
  
  if (tech.length === 0) {
    return "Vazio!";
  }

  tech.sort();

  for (let index = 0; index < tech.length; index += 1) {
    let tecnologia = {
      tech: tech[index],
      name: name
    }
    arrayTecnologias.push(tecnologia);
  }
  return arrayTecnologias;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
// Para ser um triângulo, os lados precisam ser: a+b > c    e   b+c > a    e   a+c > b
function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs(lineA + lineB > lineC) && Math.abs(lineB + lineC > lineA) && Math.abs(lineA + lineC > lineB)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(drinks) {
  let bebidas = 0;
  
  let arrayDrinks = drinks.replace(/[^1-9]/g,'');
  arrayDrinks +=
  bebidas = arrayDrinks.split("");
  
  let agua = 0;
  for (let index = 0; index < bebidas.length; index += 1) {
    agua += parseInt(bebidas[index]);
  }
  if (agua === 1){
    return agua + " copo de água"
  }
  return agua + " copos de água"
  
}
console.log(hydrate("1 cerveja, 5 cachaças e 1 copo de vinho"));



/*
Referências:

O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. Usando o espaço vazio (" ") como parâmetro para o split, o código irá percorrer minha string e procurar todo lugar com espaço e dividir a string nesses pontos - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

A função Math.abs(x) retorna o valor absoluto de um número "x" - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

O Regex vai buscar todos os caracteres que são diferentes do que eu coloquei como parâmetro (nesse caso os caracteres que vão de 1 a 9 [^1-9]) e está substituindo o que não for por "" (vazio) - https://www.horadecodar.com.br/2020/10/14/como-obter-apenas-os-numeros-de-uma-string-em-javascript/

O parseInt() vai transformar o array de string que o regex criou e vai transformar em números inteiros - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
*/
