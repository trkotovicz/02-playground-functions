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
a+b > c
b+c > a
a+c > b
*/
function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs(lineA + lineB > lineC) && Math.abs(lineB + lineC > lineA) && Math.abs(lineA + lineC > lineB)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
