function calculate(num1, num2, callback) {
    callback(num1, num2);
}

calculate(10, 20, function (a, b) {
    console.log("Addition:", a + b);
});


function calculateBill(price1, price2, price3, callback) {
    callback(price1, price2, price3);
}

calculateBill(200, 300, 500, function (a, b, c) {
    console.log("Total Bill:", a + b + c);
});


function withdrawMoney(amount, callback) {
    let balance = 10000;

    console.log("Please wait, processing withdrawal...");

    setTimeout(function () {
        balance = balance - amount;

        callback(balance);
    }, 2000);
}

withdrawMoney(2000, function (remainingBalance) {
    console.log("Remaining Balance:", remainingBalance);
});
//  first assignment is done  


function prepareOrder(callback) {
    console.log("Order preparation started...");

    setTimeout(() => {
        console.log("Order preparation finished!");
        callback();
    }, 1000);
}

function packOrder(callback) {
    console.log("Order packing started...");

    setTimeout(() => {
        console.log("Order packing finished!");
        callback();
    }, 1000);
}

function notifyCustomer() {
    console.log("Customer notification started...");

    setTimeout(() => {
        console.log("Customer notified successfully!");
    }, 1000);
}

prepareOrder(() => {
    packOrder(() => {
        notifyCustomer();
    });
}); 


// second assihnment ends  


function registerStudent(studentName, seatAvailable) {
    return new Promise((resolve, reject) => {

        if (seatAvailable) {
            resolve(`Registration successful! Welcome ${studentName}.`);
        } else {
            reject(`Registration failed! Sorry ${studentName}, the class is full.`);
        }

    });
}

registerStudent("Ali", true)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

registerStudent("Sara", false)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    }); 


    // third assignment ends 



    
function getStudentData(id) {
    return new Promise((resolve, reject) => {
        console.log(`Loading Student ${id} data...`);

        setTimeout(() => {
            const students = {
                1: { id: 1, name: "Ali", age: 20, marks: 85 },
                2: { id: 2, name: "Sara", age: 19, marks: 92 },
                3: { id: 3, name: "Ahmed", age: 21, marks: 78 }
            };

            if (students[id]) {
                resolve(students[id]);
            } else {
                reject(new Error(`Student ${id} not found!`));
            }
        }, 2000);
    });
}

async function loadStudents() {
    try {
        const student1 = await getStudentData(1);
        console.log("Student 1 data:", student1);

        const student2 = await getStudentData(2);
        console.log("Student 2 data:", student2);

        const student3 = await getStudentData(3);
        console.log("Student 3 data:", student3);

        console.log("All student data loaded successfully!");

    } catch (error) {
        console.log("Error:", error.message);
    }
}

loadStudents();

// end of 4th ass   


const tickets = [
    {
        ticketId: 101,
        customerName: "Ali",
        status: "Open"
    },
    {
        ticketId: 102,
        customerName: "Sara",
        status: "In Progress"
    },
    {
        ticketId: 103,
        customerName: "Ahmed",
        status: "Resolved"
    }
];

function getTicket(ticketId) {
    return new Promise((resolve, reject) => {
        console.log("Loading ticket details...");

        setTimeout(() => {
            const ticket = tickets.find(
                (item) => item.ticketId === Number(ticketId)
            );

            if (ticket) {
                resolve(ticket);
            } else {
                reject(new Error(
                    `Ticket ID ${ticketId} not found. Please check the ID.`
                ));
            }
        }, 2000);
    });
}

async function checkTicket(ticketId) {
    console.log("Please wait, retrieving ticket...");

    try {
        const ticket = await getTicket(ticketId);

        console.log("Ticket details:");
        console.log("Ticket ID:", ticket.ticketId);
        console.log("Customer Name:", ticket.customerName);
        console.log("Status:", ticket.status);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

checkTicket(102);
//  end of 5th Ass 