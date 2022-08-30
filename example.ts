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

// Generics

// any, unknown, never

// Type Assertions

// @ts-ignore / @ts-nocheck
