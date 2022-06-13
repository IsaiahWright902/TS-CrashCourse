"use strict";
// Basic Types
let id = 5;
let company = "FOREV3R";
let isPublished = true;
let x = "Hello";
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// Tuple - can specify exact types inside of an array
let person = [1, "Isaiah", true]; //tuple will only accept data in the same order/format
// Tuple Array
let employee; // Specifically a tuple array
employee = [
    [1, "Isaiah"],
    [2, "ohtoo"],
    [3, "zay"],
];
// Union
let pid; // In this case can be a string or a number because of '|'
pid = "22"; // (ALSO VALID) pid = 22
// Enum - Allows us to define a set of named constants numeric or stringed
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John",
};
// Type Assertion - Explicitly Tells the compiler that we want to treat an entity as a different type
let cid = 1; // can be any type
let customerId = cid; //still the cid but it can only be a number in this instance
// let customerId = cid as number -- Alternate syntax
// Functions
function addNum(x, y) {
    // in this case number defines what the function can accept and return as
    return x + y;
}
// void
function log(message) {
    // because we are using a union we set the type to 'void' since we dont know if they output could be a string or a number
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
};
// Using a interface with a function -  the interface is defining what can be passed to these variable
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
