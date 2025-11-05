console.log(`5.`)
function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Erro ao fazer parse do JSON:", error.message);
        return null;
    }
}
const valido = '{"nome": "Guilherme", "idade": 25}';
const invalido = '{nome: "Guilherme"}';

console.log(safeParse(valido));
console.log(safeParse(invalido));

console.log(``)
console.log(`6.`)
function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return null;
    } else {
      throw error;
    }
  }
}
console.log(safeParse('{"nome": "Guilherme"}')); // ✅ { nome: "Guilherme" }
console.log(safeParse('{nome: "Guilherme"}'));   // ❌ null (JSON inválido)

console.log(``)
console.log(`7.`)
function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return null;
    } else {
      throw error;
    }
  } finally {
    console.log("Parse attempt finished");
  }
}
console.log(safeParse('{"nome": "Guilherme"}'));
console.log(safeParse('{nome: "Guilherme"}'));

console.log(``)
console.log(`8.`)
class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
  }
}
function checkAge(age) {
  if (age < 0 || age > 120) {
    throw new InvalidAgeError("Idade fora do intervalo");
  }
  return "Idade válida";
}
try {
  console.log(checkAge(-5));
} catch (error) {
  console.error(error.name + ":", error.message);
}
try {
  console.log(checkAge(30));
} catch (error) {
  console.error(error.name + ":", error.message);
}
try {
  console.log(checkAge(200));
} catch (error) {
  console.error(error.name + ":", error.message);
}

console.log(``)
console.log(`9.`)
function soma(a, b) {
  console.log("Valor de a:", a);
  console.log("Valor de b:", b);

  const resultado = a + b;

  console.log("Resultado intermediário:", resultado);
  return resultado;
}
console.log("Resultado final:", soma(2, undefined));

console.log(``)
console.log(`10.`)
console.log(`Abra a página que quer inspecionar.
Abra as DevTools: Atalho: Ctrl + Shift + I ou F12.
No topo lateral das DevTools, clique na aba Sources.
No painel Sources você verá a árvore de arquivos.
Colocar breakpoints: Clique no número da linha para adicionar um breakpoint.`)


console.log(``)
console.log(`11.`)
console.log(`Relatorio: Ao executar o código com a instrução debugger e recarregar a página com o painel Sources/Depurador aberto, O navegador exibiu o arquivo e destacou a linha em pausa.`)

console.log(``)
console.log(`12.`)
function externo(n) {
  return interno(n) + 1;
}
function interno(m) {
  return m * 3;
}
externo(4);
console.log(`Step Into (F11): entra na função chamada (ex.: entra em interno()).
Step Over (F10): executa a linha sem entrar nas funções (pula interno()).
Step Out (Shift+F11): sai da função atual e volta para quem a chamou.`);

console.log(``)
console.log(`13.`)
console.log(`Externo foi chamado primeiro e ainda está na pilha, aguardando o retorno de interno.
Interno está no topo da pilha, ou seja, é a função atualmente em execução.
Quando interno terminar, ele será removido da pilha, e a execução continuará dentro de externo.`)

console.log(``)
console.log(`14.`)
console.log(`F8 (Resume): retoma a execução normal após o breakpoint.
Remove all breakpoints 🗑️: apaga todos os breakpoints de uma vez no painel Sources/Debugger.`);
