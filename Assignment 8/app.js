let array = [1200,450, 3000, 750, 1500, 250, 4200, 900]
let order =array.find(function(amount){
    return  amount > 2000
})
console.log(order)


let order2 = array.filter((amount)=>{
    return amount > 1000
})
console.log(order2)


let order3 = array.reduce(function(accumalater,amount){
    return accumalater + amount 
})
console.log(order3)


console.log("Orignal Array  " + array)


// End of Asssignment 1 


// second Assignment 


let studentsMarks =[45, 78, 92, 61, 88, 54, 73,95];

let incres =studentsMarks.map((mark)=>{
    return mark + 5
})
console.log(incres)


let highMark = studentsMarks.filter((mark)=>{
    return mark > 70
})
console.log(highMark)



let find = studentsMarks.find((marks)=>{
    return marks > 90
})
console.log(find)


let allMarks = studentsMarks.reduce((accumalater , marks)=>{
    return accumalater + marks
})
console.log(allMarks)


console.log ( 'orignal Marks' + studentsMarks)

// assignment 2 ends 


// 3rd assignment 

let employees = [
    {name: 'Ali',
         department: 'IT',
          salary: 80000},
    {name: 'Sara', 
        department: 'HR',
         salary: 70000},
    {name: 'Ahmed',
         department: 'IT',
          salary: 95000},
    {name: 'Ayesha',
         department: 'Finance', 
         salary: 85000}
];

let itEmployee = employees.filter((employ)=>{
    return employ.department === "IT"

})
console.log(itEmployee)


let salary = employees.find((employ)=>{
    return employ.salary >90000
})
console.log(salary)

let employeesName =employees.map((employ)=>{
    return employ.name
})
console.log(employeesName)



let calculate = employees.reduce((accumalater , sal )=>{
    return accumalater + sal.salary
},0)
console.log(calculate)


// end Assignment 3

// assignment 4 starts 


let inventory = new Map();

inventory.set("apples", 500);
inventory.set("bananas", 300);
inventory.set("oranges", 200);

console.log("Original Inventory:", inventory);


inventory.set("mangoes", 150);

console.log("After adding mangoes:", inventory);


inventory.set("apples", 600);

console.log("After updating apples:", inventory);


console.log("Apples quantity:", inventory.get("apples"));


console.log("Bananas exist:", inventory.has("bananas"));


inventory.delete("mangoes");

console.log("After deleting mangoes:", inventory);


console.log("Current size:", inventory.size);


console.log("Product names:", inventory.keys());
console.log("Quantities:", inventory.values());


for (let [product, quantity] of inventory.entries()) {
    console.log(product + " : " + quantity);
}


inventory.clear();


console.log("Final size:", inventory.size);
// End of assignment 4  

// 5th Assignment 


let student = {

    name: "Ali",
    class: "10",
    chemistry: 80,
    mathematics: 85,
    urdu: 75,
    english: 78,

    calculateMarks: function() {

        let total = this.chemistry + this.mathematics + this.urdu + this.english;

        let percentage = (total / 400) * 100;

        return percentage;
    }
};


console.log(student.name + " Percentage:", student.calculateMarks());


let student2 = {

    name: "Sara",
    class: "10",
    chemistry: 90,
    mathematics: 88,
    urdu: 80,
    english: 85,

    calculateMarks: function() {

        let total = this.chemistry + this.mathematics + this.urdu + this.english;

        let percentage = (total / 400) * 100;

        return percentage;
    }
};


console.log(student2.name + " Percentage:", student2.calculateMarks());


delete student.urdu;


console.log("Final Student Object:", student);

// end of assignment 5th 



// rechacked alll complete and done 