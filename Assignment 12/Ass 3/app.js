
const http = require("http");

const server = http.createServer((req, res) => {

    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;

    // Home route
    if (path === "/") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Welcome to ABC College!");
    }

    else if (path === "/about") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("ABC College is a place where students learn, grow, and build their future.");
    }

    else if (path === "/courses") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>Available Courses</h1>
            <ul>
                <li>Web Development</li>
                <li>Computer Science</li>
                <li>Information Technology</li>
            </ul>
        `);
    }

    else if (path === "/students") {
        const students = [
            { id: 1, name: "Ali", course: "Web Development" },
            { id: 2, name: "Sara", course: "Computer Science" },
            { id: 3, name: "Ahmed", course: "Information Technology" }
        ];

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(students, null, 2));
    }

    else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("College server is running at http://localhost:3000");
});
