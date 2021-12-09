// Desafio 10
// Pq o if com array vazio tem que ficar antes do for?? Embaixo ele não passa no teste "Vazio!"
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
/*
Para ser um triângulo, os lados precisam ser:
a+b > c    e   b+c > a    e   a+c > b
*/
function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs(lineA + lineB > lineC) && Math.abs(lineB + lineC > lineA) && Math.abs(lineA + lineC > lineB)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
/* o regex vai buscar todos os caracteres que são diferentes do que eu coloquei como parâmetro (nesse caso os caracteres que vão de 1 a 9 [^1-9]) e está substituindo o que não for por "" (vazio).
Referência do regex https://www.horadecodar.com.br/2020/10/14/como-obter-apenas-os-numeros-de-uma-string-em-javascript/
E o parseInt() aprendi a usar na mentoria com o Roberval. Ele vai transformar o array de string que o regex criou e vai transformar em números inteiros.
Referência do parseInt() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
*/
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


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
