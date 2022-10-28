
function addOld(a, b) {
    return a + b;
}
console.log(addOld(9, 1)); // 10



let add = (a, b) => {
    return a + b;
}
console.log(add(9, 1)); // 10



const one = 1;
let addToOne = (a) => {
    return one + a;
}

console.log(addToOne(9)); // 10




let partialAdd = (something) => {
    let addToSomething = (b) => {
        return something + b;
    }
    return addToSomething;
}
addToOne = partialAdd(1);
console.log(addToOne(9)); // 10

addToTwo = partialAdd(2);
console.log(addToOne(8)); // 10




let counter = {
    count: 0,
    inc: () => {
        this.count++;
        return this.count;
    }
}

console.log(counter.inc()); // 1
console.log(counter.inc()); // 2
console.log(counter.inc()); // 3


counter.count = 0;
console.log(counter.inc()); // 1


getInc = () => {
    let count = 0;
    const inc = () => {
        count++;
        return count;
    }
    return inc;
}
inc = getInc();
console.log(inc()); // 1
console.log(inc()); // 2
console.log(inc()); // 3



class ClassCounter {
    #count = 0;
    #inc = () => {
        this.#count++;
        return this.#count;
    }
}

const classCounter = new ClassCounter();

console.log(classCounter.inc());// 1

classCounter['#count'] // error !!!




// myModule.js
let x = 5;

export const getX = () => {
    console.trace('someone accesed x');
    return x;
}
export const setX = (val) => {
    console.trace('someone changed x');
    x = val;
}



import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6