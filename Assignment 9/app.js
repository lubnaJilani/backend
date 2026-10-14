let book = ["BK-104", "JavaScript for Beginners", "Programming", 1200]; 

let [bookId ,title , ,price] = book 


let newBook =['BK -105','learning Es6']


let [newBookId, newTitle, category = "General"] = newBook;


console.log(`Book ID: ${bookId}, Title: ${title}, Price: ${price}`);

console.log(`Book ID: ${newBookId}, Title: ${newTitle}, Category: ${category}`);


console.log(book);
console.log(newBook); 

// first Assignment endwd 

// second assignment 

let student = {
    name: "Lubna",
    age: 19,
    department: "It",
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};

let { name, age } = student;

let { department: program } = student;

let {
    address: { city, country }
} = student;

let { phone = "Not provided" } = student;

console.log("Student Name:", name);
console.log("Age:", age);
console.log("Department:", program);
console.log("City:", city);
console.log("Country:", country);
console.log("Phone:", phone);

let summary = `Student Profile:
Name: ${name}
Program: ${program}
City: ${city}
Phone: ${phone}`;

console.log(summary);

console.log("Original Student Object:", student);
//  ends  

// third assignment  



let groupA = ["Ali", "Ahmed", "Hamza"];

let groupB = ["Sara", "Ayesha", "Laiba"];

let profile = {
    name: "Laiba",
    className: "Web Development",
    city: "Karachi"
};

let combinedClass = [...groupA, ...groupB];

console.log("Combined Class List:");
console.log(combinedClass);


let copyGroupA = [...groupA];

copyGroupA.push("Usman");

console.log("Original Group A:");
console.log(groupA);

console.log("Copied Group A:");
console.log(copyGroupA);


let updatedProfile = {
    ...profile,
    city: "Lahore"
};

console.log("Original Profile:");
console.log(profile);

console.log("Updated Profile:");
console.log(updatedProfile);


let profileWithEmail = {
    ...profile,
    email: "laiba@example.com"
};

console.log("Original Profile:");
console.log(profile);

console.log("Profile With Email:");
console.log(profileWithEmail);


console.log("===== FINAL DATA =====");

console.log("Group A:", groupA);
console.log("Group B:", groupB);
console.log("Combined Class:", combinedClass);
console.log("Copied Group A:", copyGroupA);

console.log("Original Profile:", profile);
console.log("Updated City Profile:", updatedProfile);
console.log("Profile With Email:", profileWithEmail);


// ends  
// 4th assignment  

 // ath is in students .js and in main.js 

//  end of 4t  



// fith assignment  

