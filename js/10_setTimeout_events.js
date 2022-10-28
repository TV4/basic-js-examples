setTimeout(() => {
    console.log('timeout');
}, 1000);

setInterval(() => {
    console.log('interval');
}, 1000);


const div = document.createElementById('elementId');
const a = div.addEventListener('onclick', () => {});


const pr = new Promise(resolve => {
    resolve();
});
pr.then(() => {
    console.log('promise');
})

setTimeout(() => {
    console.log('timeout');
}, 0)