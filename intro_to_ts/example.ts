// Type Annotations

let myName: string = "Me";
let isTS: boolean = true;

function add(a: number, b: number) {
  return a + b
}

// Inferred Types

const numbers = [1, 4, 6, 8, 0]

// Union Types

const numbersAndStrings : (string | number)[] = ["Name", 45, "youhoou", 2]

// twitch 1:21

// Objects and Interfaces




interface Person {
  name: string;
  favNumber: number;
  dogName?: string; // Optionnal
}

const person = {
  name: "Stella",
  favNumber: 2
 }

function greet(person: Person) {
  return `Hello ${person.name}`
}

console.log(greet(person));  // Hello Stella

// Optional Properties 

type StreamerType = "affiliate" | "partner"
interface People {
  name: string;
  favNumber: number;
  dogName?: string; // Optionnal
  streamerType: StreamerType
}

function greetAndDog(people: People) {
  if (people.dogName) {
    return `Hello ${people.name} and ${people.dogName}`;
  }
  return `Hello ${people.name}`;
} 

const you: People = {
  streamerType: "affiliate",
  name: "Hey",
  favNumber: 22
}
// Classes

class Human { 
  name: string;
  dogName: string;
  favNumber: number;

  constructor(name: string, dogName: string, favNumber: number) {
    this.name = name;
    this.dogName = dogName;
    this.favNumber = favNumber
  }
}
const OGM = new Human("OGM", "No", 3)
  
  
  
// Generics

function sortItems<T>(items: T[],
  compareFn: (a: T, b: T) => number
): T[] {
  return items.sort(compareFn)
}

const numberss = [42, 5, 3456, 34, 2, 1, 53]

const sortedNumberss = sortItems<number>(
  numbers,
  (a, b) => a - b
);
// any, unknown, never

// Type Assertions

// @ts-ignore / @ts-nocheck
