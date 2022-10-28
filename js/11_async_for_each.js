(async () => {
    const wait = (time) => new Promise((resolve, reject) => {
        console.log('promise created', time);
        setTimeout(() => {
            console.log('promise resolved', time);
            resolve(time);
        }, time)
    });

    // const list = [
    //     wait(3000),
    //     wait(2000),
    //     wait(1000)
    // ];
    // // promises are already created so they are processed in paralel, 
    // // that means there is no delay between 2nd and 3rd promises in the loop
    // for(let pr of list) {
    //     await pr;
    //     console.log(pr);
    // }
    const toBeCalled = [
        getUser,
        doPayment,
        showPaymentSlip
    ];
    for(let fn of toBeCalled) {
        await fn();
        console.log(time);
    }
})();


