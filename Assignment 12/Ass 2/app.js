
// Import built-in Node.js modules
const os = require("os");
const fs = require("fs");
const path = require("path");

// ==================================
// 1. COMPUTER INFORMATION
// ==================================

console.log("===== COMPUTER INFORMATION =====");

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());

console.log(
    "Total Memory:",
    (os.totalmem() / (1024 ** 3)).toFixed(2),
    "GB"
);

console.log(
    "Free Memory:",
    (os.freemem() / (1024 ** 3)).toFixed(2),
    "GB"
);

console.log("Home Directory:", os.homedir());


// ==================================
// 2. CREATE DATA FOLDER
// ==================================

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("\nData folder created!");
} else {
    console.log("\nData folder already exists!");
}


// ==================================
// 3. CREATE STUDENT NOTES FILE
// ==================================

const filePath = path.join(dataFolder, "student-notes.txt");

console.log("File Name:", path.basename(filePath));
console.log("File Extension:", path.extname(filePath));

const notes = `I learned how to use Node.js.
I learned about the OS module.
I learned how to create and read files using FS module.`;

fs.writeFileSync(filePath, notes);

console.log("\nNotes file created successfully!");


// ==================================
// 4. READ NOTES FILE
// ==================================

let readNotes = fs.readFileSync(filePath, "utf8");

console.log("\n===== STUDENT NOTES =====");
console.log(readNotes);


// ==================================
// 5. APPEND NEW LINE
// ==================================

fs.appendFileSync(
    filePath,
    "\nI learned how to rename and delete files."
);

console.log("\n===== UPDATED NOTES =====");

readNotes = fs.readFileSync(filePath, "utf8");

console.log(readNotes);


// ==================================
// 6. RENAME NOTES FILE
// ==================================

const newFilePath = path.join(dataFolder, "class-notes.txt");

fs.renameSync(filePath, newFilePath);

console.log("\nNotes file renamed successfully!");


// ==================================
// 7. CREATE JSON FILE
// ==================================

const student = {
    name: "Ali",
    course: "Node.js",
    marks: 450,
    totalMarks: 500
};

const jsonPath = path.join(dataFolder, "student.json");

fs.writeFileSync(
    jsonPath,
    JSON.stringify(student, null, 2)
);

console.log("\nStudent JSON file created successfully!");


// ==================================
// 8. READ JSON FILE
// ==================================

const jsonData = fs.readFileSync(jsonPath, "utf8");

const studentData = JSON.parse(jsonData);

console.log("\n===== STUDENT JSON DATA =====");

console.log("Name:", studentData.name);
console.log("Course:", studentData.course);
console.log("Marks:", studentData.marks);
console.log("Total Marks:", studentData.totalMarks);


// ==================================
// 9. CREATE TEMPORARY FILE
// ==================================

const tempPath = path.join(dataFolder, "temp.txt");

fs.writeFileSync(tempPath, "This is a temporary file.");

console.log("\nTemporary file created!");


// ==================================
// 10. DELETE TEMPORARY FILE
// ==================================

fs.unlinkSync(tempPath);

console.log("Temporary file deleted!");

console.log("\n===== ALL OPERATIONS COMPLETED =====");
 




