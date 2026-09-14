let inp = document.getElementById('display');

function addNumber(value){

inp.value +=value
}

function clearDisplay(){

inp.value = ""
    
}

function deleteNumber(){
inp.value = inp.value .slice(0 ,-1)

}

function calculate() {
    let inpValue = inp.value;

    if (inpValue.includes('+')) {
          let numbers = inpValue.split('+');

        let num1 = Number(numbers[0]);
        let num2 = Number(numbers[1]);

        let result = num1 + num2;

        inp.value = result;
    }
    else if (inpValue.includes('-')) {
          let numbers = inpValue.split('-');

        let num1 = Number(numbers[0]);
        let num2 = Number(numbers[1]);

        let result = num1 - num2;

        inp.value = result;


    }
    else if (inpValue.includes('*')) {
  let numbers = inpValue.split('*');

        let num1 = Number(numbers[0]);
        let num2 = Number(numbers[1]);

        let result = num1 * num2;

        inp.value = result;

    }
    else if (inpValue.includes('/')) {

  let numbers = inpValue.split('/');

        let num1 = Number(numbers[0]);
        let num2 = Number(numbers[1]);

        let result = num1 / num2;

        inp.value = result;
    } else if(inpValue.includes('%') ){
      let numbers = inpValue.split('%');

        let num1 = Number(numbers[0]);
        let num2 = Number(numbers[1]);

        let result = num1 %num2;

        inp.value = result;
    }
}

// assignment 2


function greet() {
    console.log("Welcome to JavaScript!");
}

function greetUser(name) {
    console.log("Welcome, " + name + "!");
}

function addNumbers(num1, num2) {
    return num1 + num2;
}

greet();

greetUser("Ali");

let result = addNumbers(10, 20);

console.log(result);

// end assignment 2


// assignment 3

let num =Number(prompt('Enter Numbers'))

for(let i=1;i<=num;i++){
let row = ''
for(let j=1; j<=i;j++){
    row +=j

}
console.log(row)
}


// end assignment 3

// assignment 4



let count = 0;
for (let i = 1; i <= 20; i++) {

    if (i === 13) {
        continue;
    }

    if (i === 18) {
        break;
    }
console.log("Calling roll number " + i);
count++;}
console.log("Total roll numbers called out: " + count);

// end of assignment 4++++++++++++++++++======
