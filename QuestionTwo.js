/*
Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2
// before the call
let menu = {
width: 200,
height: 300,
title: "My menu"
};
multiplyNumeric(menu);
// after the call
menu = {
width: 400,
height: 600,
title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place */


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

const isNumeric = n => !isNaN(parseFloat(n) && isFinite(n));

const multiplyNumeric = obj => {
    for (let key in obj)
    {
        if (isNumeric(obj[key]))
        {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

console.log(menu);