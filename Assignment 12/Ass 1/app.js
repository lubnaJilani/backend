const {
    studentIntroduction,
    calculatePercentage
} = require("./student");

const name = "Ali";
const course = "Web Development";

const obtainedMarks = 450;
const totalMarks = 500;

const introduction = studentIntroduction(name, course);

const percentage = calculatePercentage(
    obtainedMarks,
    totalMarks
);

console.log(introduction);
console.log("Student Name:", name);
console.log("Course:", course);
console.log("Percentage:", percentage + "%");

console.log("Node.js Version:", process.version);