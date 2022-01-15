let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat());

let arr2 = [1, 2, 3, 4, 5];

console.log(arr2.flatMap((value) => [value, value * 2]));

let hello = "      Hello world";

hello.trimStart();

let hello2 = "Hello world     ";

hello.trimEnd();

try {
} catch {
  console.log(error);
}

let entries = [
  ["name", "Oscar"],
  ["age", "20"],
];

console.log(Object.fromEntries(entries));

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
