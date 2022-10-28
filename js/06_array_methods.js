let list = [0,1,2,3,4];
const cb = item => {
    console.log(item); 
}
list.forEach(cb);


list.map(item => {
    return item * 2
});


list.reduce((prev, cur) => {
    console.log(cur );
    return cur + prev
}, {}); // 

list.reduceRight((prev, cur) => {
    return prev + cur
}, 0); // 


list.every(item => item > 0); // false
list.some(item => item > 0); // true


list.filter(item => item > 0); // [1,2,3,4]


list.slice(1, 2); // [1]
list.slice(1, 3); // [1, 2]
list.slice(1); // [1, 2, 3, 4]
list.slice(-1); // [3, 4]


let copy = [...list];
let listToInsert = [1, 2, 3];
copy.splice(1, 3); // [1,2,3] but copy=[0,4]
copy.splice(1, 0, 1, 2, 3); // [] but copy [0,1,2,3,4]
copy.splice(1, 0, ...listToInsert); // [] but copy [0,1,2,3,4]


let nested = [[0, 10], [1], [2], [3], [4]];
nested.flat(); // [0,10,1,2,3,4]
nested.flat(0); // [[0,10], [1], [2], [3], [4]]

nested.map(itemList => {
    return itemList.filter(item => item < 5);
}).flat(); // [0,1,2,3,4]

nested.flatMap(itemList => {
    return itemList.filter(item => item < 5); 
}); // [0,1,2,3,4]


list.at(1); // [1]
list.at(-2); // [3]


list.includes(10); // false;


list.join('-'); // "0-1-2-3-4"


let anotherCopy = [...list];
anotherCopy.push(50); // 6   anotherCopy = [0,1,2,3,4,50]
anotherCopy.pop() // 5    anotherCopy = [0,1,2,3,4]
anotherCopy.unshift(-1) // 6   anotherCopy = [-1,0,1,2,3,4]
anotherCopy.shift() // -1  anotherCopy = [0,1,2,3,4]


let unordered = [21, 0, 1, 2, 3];
unordered.sort(); // [0, 1, 2, 21, 3]
sorted = unordered.sort((a, b)=> {
    if (a > b) {
        return 2;
    } 
    if (a < b) {
        return -1;
    }
    return 0;
});
console.log(sorted); // [0, 1, 2, 3, 21]