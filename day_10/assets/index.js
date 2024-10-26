let fruitArr = ['apple', 'orange', 'pineapple'];

fruitArr.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit.charAt(0).toUpperCase() + fruit.slice(1)}`);
});

let numArr = [1,2,3,4,5];
let total = null;

numArr.forEach((element, index) => {
    total += element;
})
console.log(`${total}`);

const cart = [
    {item: `apple`, price: 1.5, quantity: 2},
    {item: `orange`, price: 1.2, quantity: 5},
    {item: `strawberry`, price: 1.8, quantity: 3}
];

let sum=0;
cart.forEach(function(ele, index) {
    // console.log(ele)
    sum += ele.price * ele.quantity;  
})
console.log(sum);

let numbers = [1, 2, 3, 4, 5, 6, 7, 9, 8, 10];

function getEvenNumbers(arr) {
    return arr.filter(function(num) {
        return num % 2 == 0;
    });
}
let evenNumbers = getEvenNumbers(numbers);
console.log("Even Numbers:", evenNumbers);

function multiplyByTwo(arr) {
    return arr.map(function(num) {
        return num * 2;
    });
}
let multipliedNumbers = multiplyByTwo(evenNumbers);
console.log("Multiply by 2:", multipliedNumbers);

function sumNumbers(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
}
let totalAmount = sumNumbers(multipliedNumbers);
console.log("Total Amount:", totalAmount);





