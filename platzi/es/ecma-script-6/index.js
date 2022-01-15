function example(name, age, country) {
  var name = name || "oscar";
  var age = age || 19;
  var country = country || "Perú";
  console.log(name, age, country);
}

//es6
function example2(name = "oscar", age = 20, country = "Brasil") {
  console.log(name, age, country);
}

// example();
example2();
example2("ADRIAN", 19, "PERU");

let cadena = "Hola a todos";

console.log(`${cadena}, como están`);

//Concatenacion
let lorem = "Una frase epica \n" + "otra frase epica";
console.log(lorem);

let lorem2 = `Una frase epica 
otra frase epica`;
console.log(lorem2);

let person = { name: "Oscar", age: 20, country: "Peru" };

let { name } = person;

console.log(name);

//MANEJO DE ARRAYS

let team1 = ["Oscar", "Ricardo", "Valeria"];
let team2 = ["Jesica", "Carlo", "Rod"];

let education = ["David", ...team1, ...team2];

console.log(education);

//ASIGNACION

let name = "Adrian";
let age = 20;

obj = { name: name, age: age };
obj2 = { name, age };

//ARROW FUNCTIONS
const name = [
  { name: "Adrian", age: 20 },
  { name: "Oscar", age: 19 },
];

let listOfNames = name.map(function (i) {
  console.log(i.name);
});

let listOfNames2 = name.map((i) => console.log(i.name));

let listOfNames3 = name.map(({ name, age }) => {
  console.log(name, age);
});
let listOfNames4 = name.map((name) => console.log(name));

const square = (num) => num * num;

square(20);

let listOfNames5 = (i) => console.log(i.name);

//PROMESAS
const promise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey");
    } else {
      reject("Ups!");
    }
  });
};

promise()
  .then(() => console.log("hola"))
  .catch((error) => console.log(error));

//CLASES
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//MODULOS
import hello from "./module";

hello();

//GENERADORES

// function* helloWorld() {
//   if (true) {
//     yield "Hello, ";
//   }
//   if (true) {
//     yield "World";
//   }
// }

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//ASUNC Y AWAIT

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Hola mundo");
        }, 2000)
      : reject(new Error("Error en la promesa"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
