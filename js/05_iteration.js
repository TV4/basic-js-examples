for(let i = 0; i < 10;i++) {
    console.log('for i ' + i);
}


while(false) {
    console.log('while');
}


do {
    console.log('do while');
} while(false)


let list = [0,1,2,3,4];
for(const item of list) {
    console.log('for of', item);
}


for(const item of "text string") {
    console.log('for of string');
}


let map = new Map();
map.set('key', 'value');
for (const [key, value] of map) {
    console.log('map');
}


let set = new Set();
set.add('value');
for (const value of set) {
    console.log('for of set');
}


const divs = document.querySelectorAll("li > ul");
for (const div of divs) {
  console.log('for of nodeList');
}


function fn() {
    arguments.callee
    for(const arg of arguments) {
        console.log('for of arg');
    }
}


const obj = {
    'key': 'value'
}

for(const key in obj) {
    console.log('for in', key);
}

// loop iterable first then enumerable
list = [0,1,2,3,4];
list['customKey'] = 'customValue'
for(const key in list) {
    console.log('for in for array');
}





























const iterator = list[Symbol.iterator]();
iterator.next();
iterator.next();
for(const valueExcludingFirst of iterator) {
    console.log('for of iterator');
}




let current = 0;
const customiterable = {
    [Symbol.iterator]: () => {
        return {
            next: () => {
                if (current <= 3) {
                    current += 1;
                    return { value: current, done: false };
                }
                return { value: undefined, done: true };
            }
        }
    }
}

for(const item of customiterable) {
    console.log('for of custom');
}
