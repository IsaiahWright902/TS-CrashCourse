// Basic Types
let id: number = 5;
let company: string = "FOREV3R";
let isPublished: boolean = true;
let x: any = "Hello";
let age: number;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

// Tuple - can specify exact types inside of an array
let person: [number, string, boolean] = [1, "Isaiah", true]; //tuple will only accept data in the same order/format
// Tuple Array
let employee: [number, string][]; // Specifically a tuple array

employee = [
  [1, "Isaiah"],
  [2, "ohtoo"],
  [3, "zay"],
];

// Union
let pid: string | number; // In this case can be a string or a number because of '|'
pid = "22"; // (ALSO VALID) pid = 22

// Enum - Allows us to define a set of named constants numeric or stringed
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Objects

type User = {
  // Sets what type a user can be and what types it accepts, almost like a constructor
  id: number;
  name: string;
};

const user = {
  id: 1,
  name: "John",
};

// Type Assertion - Explicitly Tells the compiler that we want to treat an entity as a different type
let cid: any = 1; // can be any type
let customerId = <number>cid; //still the cid but it can only be a number in this instance
// let customerId = cid as number -- Alternate syntax

// Functions
function addNum(x: number, y: number): number {
  // in this case number defines what the function can accept and return as
  return x + y;
}

// void
function log(message: string | number): void {
  // because we are using a union we set the type to 'void' since we dont know if they output could be a string or a number
  console.log(message);
}

// Interfaces - Custom type or specific structure to an object
interface UserInterface {
  readonly id: number; //Read only property that cannot be written too
  name: string;
  age?: number; //The ? makes this optional
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}
// Using a interface with a function -  the interface is defining what can be passed to these variable
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
