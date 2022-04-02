
// Basic Types
let id: number = 28;
let firstName: string = 'Albert';
let likesCoffee: boolean = true;
let x: any = 'Hi';

let ids: number[] = [1, 2, 3, 4];
let arr: any[] = [1, true, 'three'];

// Tuple
let person: [number, string, boolean] = [1, 'Albert', false];
// types must be in same ordered
let employee: [number, string][];

employee = [
  [1, 'Albert'],
  [2, 'Bill'],
]

// Union
let pid: string | number;
pid = '22';

// Enum
enum Direction1 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}
console.log(Direction1.Left)

// Objects
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'Albert'
}

// Type Assertion
let cid: any = 1
// let customerId: <number>cid
let customerId = cid as number;
customerId = 3;
console.log(customerId);

// Functions
const addNum = (x: number, y: number): number => {
  return x + y;
}
const answer = addNum(2, 3);
console.log(answer)

// no return value: void
const log = (message: string | number): void => {
  console.log(message);
}
