
import getFullName, { getTotalMarks } from "./studentTools.js";

let firstName = "Sara";
let lastName = "Ahmed";

let mark1 = 85;
let mark2 = 90;
let mark3 = 78;
let mark4 = 92;

let fullName = getFullName(firstName, lastName);

let totalMarks = getTotalMarks(
    mark1,
    mark2,
    mark3,
    mark4
);

console.log("Student Name:", fullName);
console.log("Total Marks:", totalMarks);



//  5th ass  



import courses from "./courses.js";
import formatCourse from "./courseTools.js";

let { courseName, fee } = courses[0];

console.log("Selected Course:", courseName);
console.log("Course Fee:", fee);


let updatedCourses = [
    ...courses,
    {
        courseName: "Python Programming",
        instructor: "Ayesha",
        duration: "3 Months",
        fee: 18000
    }
];

console.log("Original Courses:", courses);
console.log("Updated Courses:", updatedCourses);


let revisedCourse = {
    ...courses[0],
    fee: 20000
};

console.log("Original Course:", courses[0]);
console.log("Revised Course:", revisedCourse);


console.log("===== COURSE SUMMARIES =====");

updatedCourses.forEach((course) => {
    console.log(
        formatCourse(
            course.courseName,
            course.instructor,
            course.fee
        )
    );
});
