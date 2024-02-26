"use strict";
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
function createFruit(Name, color, taste) {
    return {
        Name,
        color,
        taste,
    };
}
const fruits = [
    createFruit("Orange", "Orange", "Sour"),
    createFruit("Mango", "Yellow", "sweet"),
    createFruit("Pommegranate", "Red", "Sour and Sweet"),
    createFruit("Grapes", "Green", "Citrusy"),
    createFruit("Pineapple", "Golden", "Sweet"),
];
console.log(createFruit);
// Error time
let invalidindex = 10;
//since there are only 5 fruits
console.log(`Fruits at index ${invalidindex}:`, fruits[invalidindex]);
fruits.forEach((fruit) => {
    console.log(`Name: ${fruit.Name}, Color: ${fruit.color}, Taste: ${fruit.taste}`);
});
