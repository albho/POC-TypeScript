"use strict";
// Basic Types
let id = 28;
let firstName = 'Albert';
let likesCoffee = true;
let x = 'Hi';
let ids = [1, 2, 3, 4];
let arr = [1, true, 'three'];
// Tuple
let person = [1, 'Albert', false];
// types must be in same ordered
let employee;
employee = [
    [1, 'Albert'],
    [2, 'Bill'],
];
// Union
let pid;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
const user = {
    id: 1,
    name: 'Albert'
};
// Type Assertion
let cid = 1;
// let customerId: <number>cid
let customerId = cid;
customerId = 3;
console.log(customerId);
// Functions
const addNum = (x, y) => {
    return x + y;
};
const answer = addNum(2, 3);
console.log(answer);
// no return value: void
const log = (message) => {
    console.log(message);
};
const user1 = {
    id: 1,
    name: 'Albert',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// const cannotDoThis: MathFunc = (x: number, y:string): number => x + y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const bert = new Person(1, 'Bert');
console.log(bert);
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['one', 'two', 'three']);
