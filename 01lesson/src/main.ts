type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specific

let a: One = "hello";
let b = a as Two;


const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if(c === 'add') return a + b
  return '' + a + b
}

let myVal: string = addOrConcat(2,2,"concat") as string

console.log(myVal)