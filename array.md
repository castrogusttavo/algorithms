# Métodos de Arrays em JavaScript/TypeScript

## Adicionando e Removendo Elementos

### `push`
Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
#### Exemplos:
```typescript
let arr = [1, 2, 3];
arr.push(4); // arr é agora [1, 2, 3, 4]

arr.push(5, 6); // arr é agora [1, 2, 3, 4, 5, 6]
```

### `pop`
Remove o último elemento de um array e o retorna. Este método modifica o comprimento do array.
#### Exemplos:
```typescript
let arr = [1, 2, 3];
let ultimo = arr.pop(); // arr é agora [1, 2], e ultimo é 3

arr.pop(); // arr é agora [1], e o elemento removido é 2
```

### `unshift`
Adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.
#### Exemplos:
```typescript
let arr = [1, 2, 3];
arr.unshift(0); // arr é agora [0, 1, 2, 3]

arr.unshift(-2, -1); // arr é agora [-2, -1, 0, 1, 2, 3]
```

### `shift`
Remove o primeiro elemento de um array e o retorna. Este método modifica o comprimento do array.
#### Exemplos:
```typescript
let arr = [1, 2, 3];
let primeiro = arr.shift(); // arr é agora [2, 3], e primeiro é 1

arr.shift(); // arr é agora [3], e o elemento removido é 2
```

## Acessando e Alterando Elementos

### `concat`
Retorna um novo array que é a combinação de dois ou mais arrays.
#### Exemplos:
```typescript
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1.concat(arr2); // arr3 é [1, 2, 3, 4]

let arr4 = arr3.concat([5, 6], [7, 8]); // arr4 é [1, 2, 3, 4, 5, 6, 7, 8]
```

### `slice`
Retorna uma cópia superficial de uma parte de um array em um novo array, selecionada desde o início até o fim (não incluindo o fim). O array original não é modificado.
#### Exemplos:
```typescript
let arr = [1, 2, 3, 4];
let novoArr = arr.slice(1, 3); // novoArr é [2, 3]

let outroArr = arr.slice(2); // outroArr é [3, 4]
```

### `splice`
Adiciona/removes elementos de um array, modificando o array original, e retorna os elementos removidos.
#### Exemplos:
```typescript
let arr = [1, 2, 3, 4];
let removidos = arr.splice(1, 2); // arr é agora [1, 4], e removidos é [2, 3]

arr.splice(1, 0, 2, 3); // arr é agora [1, 2, 3, 4]
```

## Iteração

### `forEach`
Executa uma função fornecida uma vez para cada elemento do array.
#### Exemplos:
```typescript
let arr = [1, 2, 3];
arr.forEach(elemento => console.log(elemento)); // 1 2 3

arr.forEach((elemento, indice) => console.log(\`Elemento \${elemento} no índice \${indice}\`));
// Elemento 1 no índice 0
// Elemento 2 no índice 1
// Elemento 3 no índice 2
```

### `map`
Cria um novo array com os resultados da chamada de uma função fornecida em cada elemento do array.
#### Exemplos:
```typescript
let arr = [1, 2, 3];
let novoArr = arr.map(x => x * 2); // novoArr é [2, 4, 6]

let strArr = arr.map(x => \`Número: \${x}\`); // strArr é ["Número: 1", "Número: 2", "Número: 3"]
```

### `filter`
Cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
#### Exemplos:
```typescript
let arr = [1, 2, 3, 4];
let filtrado = arr.filter(x => x > 2); // filtrado é [3, 4]

let pares = arr.filter(x => x % 2 === 0); // pares é [2, 4]
```

### `reduce`
Aplica uma função a um acumulador e a cada valor do array (da esquerda para a direita) para reduzi-lo a um único valor.
#### Exemplos:
```typescript
let arr = [1, 2, 3, 4];
let soma = arr.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0); // soma é 10

let produto = arr.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1); // produto é 24
```

### `reduceRight`
Aplica uma função a um acumulador e a cada valor do array (da direita para a esquerda) para reduzi-lo a um único valor.
#### Exemplos:
```typescript
let arr = [1, 2, 3, 4];
let soma = arr.reduceRight((acumulador, valorAtual) => acumulador + valorAtual, 0); // soma é 10

let diferenca = arr.reduceRight((acumulador, valorAtual) => acumulador - valorAtual, 0); // diferenca é -2
```

## Encontrando Elementos

### `find`
Retorna o primeiro elemento do array que satisfaz a função de teste fornecida. Caso contrário, retorna `undefined`.
#### Exemplos:
```typescript
let arr = [1, 2, 3, 4];
let encontrado = arr.find(x => x > 2); // encontrado é 3

let naoEncontrado = arr.find(x => x > 4); // naoEncontrado é undefined
```

### `findIndex`
Retorna o índice do primeiro elemento do array que satisfaz a função de teste fornecida. Caso contrário, retorna `-1`.
#### Exemplos:
```typescript
let arr = [1, 2, 3, 4];
let indice = arr.findIndex(x => x > 2); // indice é 2

let naoEncontradoIndice = arr.findIndex(x => x > 4); // naoEncontradoIndice é -1
```

### `includes`
Determina se um array contém um determinado elemento, retornando `true` ou `false` conforme apropriado.
#### Exemplos:
```typescript
let arr = [1, 2, 3];
let contem = arr.includes(2); // contem é true

let naoContem = arr.includes(4); // naoContem é false
```

### `indexOf`
Retorna o primeiro índice em que um determinado elemento pode ser encontrado no array, ou `-1` se o elemento não estiver presente.
#### Exemplos:
```typescript
let arr = [1, 2, 3];
let indice = arr.indexOf(2); // indice é 1

let naoEncontradoIndice = arr.indexOf(4); // naoEncontradoIndice é -1
```

### `lastIndexOf`
Retorna o último índice em que um determinado elemento pode ser encontrado no array, ou `-1` se o elemento não estiver presente.
#### Exemplos:
```typescript
let arr = [1, 2, 3, 2];
let indice = arr.lastIndexOf(2); // indice é 3

let naoEncontradoIndice = arr.lastIndexOf(4); // naoEncontradoIndice é -1
```

## Ordenação e Transformação

### `sort`
Ordena os elementos do array e retorna o array.
#### Exemplos:
```typescript
let arr = [3, 1, 4, 1, 5];
arr.sort((a, b) => a - b); // arr é agora [1, 1, 3, 4, 5]

arr.sort((a, b) => b - a); // arr é agora [5, 4, 3, 1, 1]
```

### `reverse`
Inverte a ordem dos elementos do array e retorna o array.
#### Exemplos:
```typescript
let arr = [1, 2, 3];
arr.reverse(); // arr é agora [3, 2, 1]

let outroArr = ['a', 'b', 'c'];
outroArr.reverse(); // outroArr é agora ['c', 'b', 'a']
```

### `join`
Junta todos os elementos de um array (ou um array-like object) em uma string e retorna essa string.
#### Exemplos:
```typescript
let arr = [1, 2, 3];
let str = arr.join('-'); // str é "1-2-3"

let outroArr = ['a', 'b', 'c'];
let strOutro = outroArr.join(''); // str

Outro é "abc"
```

### `split`
Divide uma string em um array de substrings, utilizando um separador especificado e retornando o array.
#### Exemplos:
```typescript
let str = "1-2-3";
let arr = str.split('-'); // arr é ["1", "2", "3"]

let strOutro = "abc";
let outroArr = strOutro.split(''); // outroArr é ["a", "b", "c"]
```

### `toString`
Retorna uma string representando o array especificado e seus elementos.
#### Exemplos:
```typescript
let arr = [1, 2, 3];
let str = arr.toString(); // str é "1,2,3"

let outroArr = ['a', 'b', 'c'];
let strOutro = outroArr.toString(); // strOutro é "a,b,c"
```

### `every`
Testa se todos os elementos no array passam no teste implementado pela função fornecida. Retorna um valor booleano.
#### Exemplos:
```typescript
let arr = [1, 2, 3, 4];
let todosMaioresQueZero = arr.every(x => x > 0); // todosMaioresQueZero é true

let todosMenoresQueTres = arr.every(x => x < 3); // todosMenoresQueTres é false
```

### `some`
Testa se ao menos um dos elementos no array passa no teste implementado pela função fornecida. Retorna um valor booleano.
#### Exemplos:
```typescript
let arr = [1, 2, 3, 4];
let algumMaiorQueDois = arr.some(x => x > 2); // algumMaiorQueDois é true

let algumMenorQueZero = arr.some(x => x < 0); // algumMenorQueZero é false
```

### `fill`
Preenche todos os elementos de um array a partir de um índice inicial até um índice final com um valor estático.
#### Exemplos:
```typescript
let arr = [1, 2, 3, 4];
arr.fill(0); // arr é agora [0, 0, 0, 0]

arr.fill(2, 1, 3); // arr é agora [0, 2, 2, 0]
```

### `copyWithin`
Copia uma parte do array para outra localização no mesmo array e retorna o array sem modificar seu comprimento.
#### Exemplos:
```typescript
let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3); // arr é agora [4, 5, 3, 4, 5]

arr.copyWithin(1, 3, 4); // arr é agora [4, 4, 3, 4, 5]
```

### `flat`
Retorna um novo array com todos os elementos sub-arrays concatenados nele recursivamente até a profundidade especificada.
#### Exemplos:
```typescript
let arr = [1, [2, [3, [4]]]];
let novoArr = arr.flat(); // novoArr é [1, 2, [3, [4]]]

let profundoArr = arr.flat(2); // profundoArr é [1, 2, 3, [4]]
```

### `flatMap`
Primeiro mapeia cada elemento usando uma função de mapeamento e, em seguida, achata o resultado em um novo array.
#### Exemplos:
```typescript
let arr = [1, 2, 3];
let novoArr = arr.flatMap(x => [x, x * 2]); // novoArr é [1, 2, 2, 4, 3, 6]

let outroArr = arr.flatMap(x => [[x * 2]]); // outroArr é [[2], [4], [6]]
```

Esses métodos são fundamentais para manipulação de arrays em JavaScript/TypeScript e são amplamente utilizados em diversas operações de desenvolvimento.