let students = ['Ali', 'Sara', 'Ahmed', 'Ayesha', 'Hamza', 'Sara', 'Bilal'];

let isPre = students.includes('Ayesha');
console.log("Is Ayesha present?", isPre);

let fSara = students.indexOf('Sara');
console.log("First Sara position:", fSara);

let lSara = students.lastIndexOf('Sara');
console.log("Last Sara position:", lSara);

let fA = students.find(student => student.startsWith('A'));
console.log("First student starting with A:", fA);

let firstAIndex = students.findIndex(student => student.startsWith('A'));
console.log("Position of first student starting with A:", firstAIndex);

let laA = students.findLast(student => student.startsWith('A'));
console.log("Last student starting with A:", laA);

let lastAIndex = students.findLastIndex(student => student.startsWith('A'));
console.log("Position of last student starting with A:", lastAIndex);
// ends

// /////2nd ass starts


let prices = [1200, 450, 3000, 750, 1500, 250];

let lowToHigh = [...prices].sort((a, b) => a - b);
console.log("Lowest to highest:", lowToHigh);

let highToLow = [...prices].sort((a, b) => b - a);
console.log("Highest to lowest:", highToLow);

console.log("Original list:", prices);

let reversed = [...prices].reverse();
console.log("Reversed list:", reversed);

let randomPrices = [...prices].sort(() => Math.random() - 0.5);
console.log("Random ordering:", randomPrices);

// end



// star of 3rd ass

let marks = [78, 45, 92, 66, 88, 54, 91, 73];

let secondMarks = [50, 98, 55, 99, 56, 8, 7];

let allMarks = marks.concat(secondMarks);
console.log(allMarks);

let selectedMarks = allMarks.slice(2, 6);
console.log(selectedMarks);

allMarks.splice(3, 1, 70);
console.log(allMarks);

console.log(allMarks.length);

allMarks.sort(function(a, b) {
    return a - b;
});
console.log(allMarks);

allMarks.reverse();
console.log(allMarks);

let showMarks = (arr) => {
    console.log(arr);
};

showMarks(allMarks);
// end 


// 4th assignment 
let employ = {
    employeeId: '01',
    FirstName: 'Ali',
    LastName: 'Khan',
    department: 'IT Department',
    designation: 'Full Time',
    salary: '150000'
};

console.log(employ.FirstName);
console.log(employ.department);

console.log(employ["designation"]);
console.log(employ["salary"]);

employ.email = "ali@gmail.com";

employ.department = "HR Department";

delete employ.LastName;

console.log(employ); 
// Ends

// 5th assignment 


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

// Ends all five