const data = { frontend: "Dara", backend: "Misael", design: "Ana" };

const entries = Object.entries(data);
console.log(entries.length);

const data2 = {};

const entries2 = Object.entries(data2);

console.log(entries2.length);

const values = Object.values(data);
console.log(values);

const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, " coders"));
