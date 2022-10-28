let count = 0;

if (true) {
    let count = 10;
}
count++;
console.log(count);


function fn() {
    
}
count++;
console.log(count);



{
    let count = 30;
}
count++;
console.log(count);


for(let i = 0; i < 1; i++) {
    let count = 40;
}

count++;
console.log(count);


switch (0) {
    case 0: {
        let count = 50;
    }
    case 0: 
        let count = 60;
}
count++;
console.log(count);


{
    let count = 70;
    {
        const count = 80;
    }
    console.log(count);
}


{
  
    {
        console.log(count);
        c = 100;
        var c;
    }
    console.log(count);
}



{
    try {
        let count = 110;
    } catch (e) {
        let count = 120;
    }
    console.log(count);
}



{
    for(let i = 0; i < 10;i++) {
        let count = 130;
    }
}

