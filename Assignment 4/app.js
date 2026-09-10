let num1 = 60;
let num2 = 7;

console.log("Addition:", num1 + num2);

console.log("Subtraction:", num1 - num2);

console.log("Multiplication:", num1 * num2);

console.log("Division:", num1 / num2);

console.log("Modulus:", num1 % num2);


let num =10;
num += 5;
console.log(num)

num -= 3;      
console.log(num);



num %= 2;     
console.log(num);


num /= 3;      
console.log(num);





let a = 10;
let b = "10";

console.log(a == b);    
console.log(a === b);   

console.log(a != b);    
console.log(a !== b);   

console.log(a > 5);     
console.log(a < 5);     

console.log(a >= 10);  
console.log(a <= 10);   




// end of first assignment________________________________-

// second assignment


let inpValue = document.getElementById('inp');
let ul = document.getElementById('ulCAll');

function task() {
    let inp = inpValue.value;
    let li = document.createElement('li');
    li.innerText = inp;
if(inp > 90 ){
    li.innerText = 'You got A+'
    
}else if(inp > 80){
    li.innerText = "you dot A"
}else if(inp > 70){
    li.innerText = "you dot B"
}else if(inp > 60){
    li.innerText = "you dot C"
}else if(inp > 50){
    li.innerText = "you dot D"
}else{
    li.innerText = "Fail bro"
}
ul.appendChild(li);

    inpValue.value = ""
}



// Complete 2nd assignment====================



// 3rd assignment=============================


const name1 = 'lubna';
const password = '123456';
let userName = document.getElementById("uName");
let pass = document.getElementById("pass");

function sub(){

    let uName = userName.value.toLowerCase();
    
    let upass = pass.value;
    if(uName === name1 && password === upass){
        alert('Login sucssefull')

    }else{
        alert('User name or password Wrong')
    }}


    // end of assignment 3

    // start of assignment 4 ........................

let age = 18
let result =age >= 18 ?"Eligible to Vote" : "Not Eligible to Vote";
console.log(result);

// end of assignment


// start os assignment 5


let choice = 3;

function menu() {

    switch (choice) {

        case 1:
            console.log("You selected Home");
            break;

        case 2:
            console.log("You selected About");
            break;

        case 3:
            console.log("You selected Services");
            break;

        case 4:
            console.log("You selected Contact");
            break;

        default:
            console.log("Invalid Choice");
    }
}
// end of assignment 5

