function greet(name) {
    console.log(`Hello, ${name}!`)
}
greet("leandro")

function calculateArea(radius){
    console.log(Math.PI * radius * radius)
}
calculateArea(3.14)

function currentDate(){
    let today = new Date()
    console.log(today)
}
currentDate()

let = 10
function shadowExample(x){
    console.log("Parâmetro/Variável Local (x):", x);
    console.log("Variável Global (x):", globalThis.x);
}
shadowExample(20);

function isPrime(n) {
    if (n <= 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  const limite = Math.sqrt(n);
  for (let divisor = 3; divisor <= limite; divisor += 2) {
    if (n % divisor === 0) {
      return false;
    }
  }
  return true;
}
isPrime()

function toFahrenheit(celsius){
    console.log(celsius * 1.8) + 32
}
toFahrenheit(23)
function toCelsius(fahrenheit){
    console.log(fahrenheit - 32)* 0.55556
}
toCelsius(57)

function getMax(arr) {
  if (arr.length === 0) return undefined; // cuidado com array vazio
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(getMax([3, 7, 2, 9, 5])); // 9

//
//
//
//
function average(scores) {
  if (scores.length === 0) return 0; // ou undefined dependendo do design
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

console.log(average([8, 7.5, 9, 10])); // (8 + 7.5 + 9 + 10) / 4 = 8.625

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(fullName("Maria", "Silva")); // Maria Silva

function double(n) {
  return n * 2;
}

function quadruple(n) {
  return double(double(n));
}

console.log(quadruple(3)); // 12

let mode = "light"; // global

function toggleMode(mode) {
  // parâmetro 'mode' faz shadowing da global
  let newMode;
  if (mode === "light") {
    newMode = "dark";
  } else {
    newMode = "light";
  }
  console.log("modo dentro da função:", newMode); // local
  return newMode;
}

const localResult = toggleMode(mode); // passa valor da global
console.log("resultado retornado:", localResult);
console.log("modo global ainda é:", mode); // global continua "light"

let analysisType = "sum"; // variável global

function analyzeNumbers(analysisType, numbers) {
  // O parâmetro 'analysisType' faz shadowing da global
  console.log("valor do parâmetro (shadowed) analysisType dentro da função:", analysisType);
  console.log("valor da global analysisType via globalThis.analysisType:", globalThis.analysisType);

  // função auxiliar para somar
  function sumNumbers(arr) {
    let total = 0; // variável local acumuladora
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }

  // função auxiliar para média
  function averageNumbers(arr) {
    if (arr.length === 0) return 0;
    const total = sumNumbers(arr); // reuso da função auxiliar
    return total / arr.length;
  }

  // decisão baseada no parâmetro local (shadowed)
  if (analysisType === "sum") {
    return sumNumbers(numbers);
  } else if (analysisType === "average") {
    return averageNumbers(numbers);
  } else {
    throw new Error("Tipo de análise desconhecido: " + analysisType);
  }
}

// Chamadas fora da função
console.log(analyzeNumbers("sum", [1, 2, 3, 4]));     // 10
console.log(analyzeNumbers("average", [1, 2, 3, 4])); // 2.5

// Mostrar que a global não mudou a menos que a atribuamos:
console.log("global analysisType após chamadas:", analysisType); // "sum"


