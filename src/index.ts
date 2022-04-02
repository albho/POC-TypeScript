
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
