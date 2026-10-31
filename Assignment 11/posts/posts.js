async function getData() {
    try{
        const response =await fetch("https://jsonplaceholder.typicode.com/posts/1")

        const data = await response.json()
        console.log(data)
    }catch (error) {
        console.log("Error:", error);
    }
    
} 
getData()



const API = "https://jsonplaceholder.typicode.com/posts";

async function request(url, method, body = null) {
    try {
        const options = {
            method: method,
            headers: {
                "Content-Type": "application/json"
            }
        };

        if (body !== null) {
            // JSON.stringify converts a JavaScript object into a JSON string.
            // Content-Type tells the server that the request body is JSON.
            options.body = JSON.stringify(body);
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        let data = null;

        if (method !== "DELETE") {
            data = await response.json();
        }

        return {
            status: response.status,
            data: data
        };

    } catch (error) {
        throw error;
    }
}

const form = document.getElementById("postForm");
const output = document.getElementById("output");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const post = {
        title: document.getElementById("title").value,
        body: document.getElementById("content").value,
        userId: Number(document.getElementById("userId").value)
    };

    try {
        const result = await request(API, "POST", post);

        output.textContent = JSON.stringify(result, null, 2);

    } catch (error) {
        output.textContent = error.message;
    }
});

document.getElementById("putBtn").addEventListener("click", async function () {

    const post = {
        id: 1,
        title: "Updated Announcement",
        body: "This is the complete replacement content.",
        userId: 1
    };

    try {
        const result = await request(`${API}/1`, "PUT", post);

        output.textContent = JSON.stringify(result, null, 2);

    } catch (error) {
        output.textContent = error.message;
    }

});

document.getElementById("patchBtn").addEventListener("click", async function () {

    const changes = {
        title: "My New Announcement Title"
    };

    try {
        const result = await request(`${API}/1`, "PATCH", changes);

        output.textContent = JSON.stringify(result, null, 2);

    } catch (error) {
        output.textContent = error.message;
    }

});

document.getElementById("deleteBtn").addEventListener("click", async function () {

    try {
        const result = await request(`${API}/1`, "DELETE");

        output.textContent = `Post deleted successfully!\nStatus Code: ${result.status}`;

    } catch (error) {
        output.textContent = error.message;
    }

});
