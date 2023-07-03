let stringArray = ['one', 'heu', 'Dave'];
let guitar = ['Strat', 'Les Paul', 5150];
let mixedData = [ 'EVH', 1984, true];

stringArray[0] = 'John';

stringArray.push('her');

guitar[0] = 1984;


let test = [];

let bands: string[] = []; 

//tuple:

let myTuple: [string, number, boolean] = ['Dave', 42, true];


//objects


let myObj: object = {}

const exampleObj = {
  prop1: 'Dave',
  prop2: true
}

type Guitarist = {
  name: string,
  active: boolean,
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812']
}