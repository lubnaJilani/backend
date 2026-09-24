let fruit = ['apple','banana','kiwi','orange','grape']
document.getElementById('result').innerText= fruit.length;


let fruits2= ['apple','banana','kiwi','orange','grape']
let res = fruits2.toString()
document.getElementById('result').innerText= res;



let fruits3= ["Apple", "Banana", "Mango", "Orange", "Grapes"];

document.write(fruits3.at(0));
document.write(fruits3.at(2) + '<br>');


let fruits4= ['apple','banana','kiwi','orange','grape']

document.write(fruits4.join(" - ") +'<br>');

//  end of assignment 1


// 2nd Assignment

let students = ["Ali", "Sara", "Ahmed", "Ayesha", "Hamza"];

console.log("Original array:", students);


students.push("Zain");
console.log("After push:", students);


let removedLast = students.pop();
console.log("Removed by pop:", removedLast);
console.log("After pop:", students);


students.unshift("Hina");
console.log("After unshift:", students);

let removedFirst = students.shift();
console.log("Removed by shift:", removedFirst);
console.log("After shift:", students);
console.log("Final number of students:", students.length);

// @nd assignment ends


// 3rd assi




let fruits = ["Apple", "Banana", "Mango", "Orange"];
let vegetables = ["Potato", "Tomato", "Carrot", "Onion"];


let combined = fruits.concat(vegetables);
console.log("Combined array:", combined);

let copied = fruits.slice(1, 3);
console.log("Sliced array:", copied);

fruits.splice(1, 1);
console.log("After removing with splice:", fruits);

fruits.splice(1, 0, "Grapes");
console.log("After adding with splice:", fruits);

delete fruits[2];

console.log("After delete:", fruits);
console.log("Length after delete:", fruits.length);
console.log("Deleted position:", fruits[2])

// end of 3rd assignment

//4th assignment


let fruit5= ["Apple", "Banana", "Mango"];
let name = "Lubna";
let number = 25;


console.log(Array.isArray(fruit5))
console.log(Array.isArray(name));
console.log(Array.isArray(number));


let showArray = (arr) => {
    console.log(arr);
};

showArray(fruit5)

let showValue = (value) => {
    console.log(value);
};

showValue("Hello");

// assignment 4th complete


// 5th start


let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones"];

console.log("Number of products:", products.length);

console.log("First product:", products.at(0));
console.log("Last product:", products.at(-1));

products.push("Webcam");
console.log("After push:", products);

products.unshift("Printer");
console.log("After unshift:", products);

products.pop();
console.log("After pop:", products);

products.shift();
console.log("After shift:", products);

let secondProducts = ["Speaker", "USB"];

let combinedProducts = products.concat(secondProducts);
console.log("Combined products:", combinedProducts);

let smallList = combinedProducts.slice(1, 4);
console.log("Small list:", smallList);

combinedProducts.splice(2, 1, "Tablet");
console.log("After splice:", combinedProducts);

console.log("Final product list:", combinedProducts.join(" - "));

let showProducts = (arr) => {
    console.log("Final array:", arr);
};

showProducts(combinedProducts);

// Check if final list is an array
console.log("Is array:", Array.isArray(combinedProducts));

