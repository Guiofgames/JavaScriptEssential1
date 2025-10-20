const values = [0, 1, "", "Hello", null, undefined, {}, []];

console.log("--- Conversão para Booleano (Boolean(valor)) ---");

values.forEach(value => {
    const displayValue = (value === null) ? 'null' : (value === undefined) ? 'undefined' : JSON.stringify(value);
    const result = Boolean(value);
    console.log(`Boolean(${displayValue}): ${result}`);
});