let students = ['Ali', 'Sara', 'Ahmed', 'Ayesha', 'Hamza',
'Sara', 'Bilal'];

if (students.includes('Ayesha')) {
    console.log('Ayesha is present');
}

let position = students.indexOf('Sara');
document.write(position + "<br>");

let lastPosition = students.lastIndexOf('Sara');
document.write(lastPosition + "<br>");

let student = students.find(function(name) {
    return name.startsWith("A");
});
document.write(student + "<br>");

let stu = students.findIndex(function(name) {
    return name.startsWith('A');
});
document.write(stu + "<br>");

//first asssignment ends

// second assignment starts


let price =[1200, 450, 3000, 750, 1500, 250];
price.sort(function(a,b){
    return a-b
})
document.write(price +"<br>")

price.sort(function(a,b){
    return b-a
})
document.write(price +"<br>")

let price1 =[1200, 450, 3000, 750, 1500, 250];

document.write("Orignal List :" + price1 + '<br>')
let reverse = price1.reverse()
document.write("Reverse List :" + reverse + '<br>')


let productValue = [1200, 450, 3000, 750, 1500, 250];
productValue.sort(function(){
    return Math.random() - 0.5
})
document.write(productValue +"<br>")


// second ends

//third asss starsa

let marks = [78, 45, 92, 66, 88, 54, 91, 73];

let secondMarks = [50, 98, 55, 99, 56, 8, 7];

let allMarks = marks.concat(secondMarks);

document.write("Combined Marks: " + allMarks + "<br>");

let selectedMarks = allMarks.slice(2, 6);

document.write("Selected Marks: " + selectedMarks + "<br>");

let mark = [78, 45, 92, 66, 88, 54, 91, 73];

mark.splice(3, 1, 70);

document.write("Changed Marks: " + mark + "<br>");

let markTotal = [78, 45, 92, 66, 88, 54, 91, 73];

let total = markTotal.length;

document.write("Total Marks: " + total + "<br>");

markTotal.sort(function(a, b) {
    return a - b;
});

document.write("Sorted Marks: " + markTotal + "<br>");

markTotal.reverse();

document.write("Reversed Marks: " + markTotal + "<br>");

let showResult = (markTotal) => {
    document.write("Final Result: " + markTotal);
};

showResult(markTotal);
// ends

// /////4th ass starts


let employ ={
    employeeId : '01',
    FirstName : 'Ali',
    LastName : "Khan",
    department : "it department",
    designation : "Full Time",
    salary : '150000' 
}

employ.department = "HR Department";
employ.email = "ali@gmail.com";


console.log(employ.FirstName)
console.log(employ.LastName)
delete employ.LastName;
console.log(employ["salary"]);

console.log(employ["designation"]);

// end



// star of 5th ass



let employ = {
    employeeId: '01',
    FirstName: 'Ali',
    LastName: 'Khan',
    department: 'IT Department',
    designation: 'Full Time',
    salary: '150000',

    getFullName: function() {
        return this.FirstName + " " + this.LastName;
    },

    getInfo: function() {
        return "Employee ID: " + this.employeeId +
               ", Department: " + this.department;
    }
};

console.log(employ.getFullName());
console.log(employ.getInfo());





let employ2 = {
    employeeId: '02',
    FirstName: 'Sara',
    LastName: 'Ahmed',
    department: 'HR Department',
    designation: 'Manager',
    salary: '120000',

    getFullName: function() {
        return this.FirstName + " " + this.LastName;
    },

    getInfo: function() {
        return "Employee ID: " + this.employeeId +
               ", Department: " + this.department;
    }
};

console.log(employ2.getFullName());
console.log(employ2.getInfo());