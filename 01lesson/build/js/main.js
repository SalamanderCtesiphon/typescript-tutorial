"use strict";
// convert to more or less specific
let a = "hello";
let b = a;
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
console.log(myVal);
