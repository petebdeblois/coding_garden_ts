"use strict";
// Type Annotations
let myName = "Me";
let isTS = true;
function add(a, b) {
    return a + b;
}
// Inferred Types
const numbers = [1, 4, 6, 8, 0];
// Union Types
const numbersAndStrings = ["Name", 45, "youhoou", 2];
const person = {
    name: "Stella",
    favNumber: 2
};
function greet(person) {
    return `Hello ${person.name}`;
}
console.log(greet(person));
// Optional Properties
// Classes
// Generics
// any, unknown, never
// Type Assertions
// @ts-ignore / @ts-nocheck
