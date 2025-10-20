const tiposPrimitivos = ['String', 'Number', 'Boolean', 'Null', 'Undefined', 'Symbol', 'BigInt'];
console.log(tiposPrimitivos);

const stringVar = 'Hello, World!';
const numberVar = 10;
const booleanVar = true;
const nullVar = null;
let undefinedVar;
const symbolVar = Symbol('description');
const bigIntVar = 9007199254740991n;
console.log(stringVar);
console.log(numberVar);
console.log(booleanVar);
console.log(nullVar);
console.log(undefinedVar);
console.log(symbolVar);
console.log(bigIntVar);

const mySymbol = Symbol('unique id');
console.log(typeof mySymbol);