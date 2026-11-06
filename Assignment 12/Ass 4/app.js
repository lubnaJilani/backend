
const fs = require("fs");
const path = require("path");

const inputFile = path.join(__dirname, "large.txt");
const outputFile = path.join(__dirname, "copy.txt");

if (!fs.existsSync(inputFile)) {
    console.log("Error: large.txt file does not exist!");
} else {


    console.log("\n===== READING FILE =====");

    const readableStream = fs.createReadStream(inputFile, {
        encoding: "utf8"
    });

    readableStream.on("data", (chunk) => {
        console.log("Received Chunk:");
        console.log(chunk);
    });

    readableStream.on("end", () => {
        console.log("File reading completed!");
    });

    readableStream.on("error", (error) => {
        console.log("Reading Error:", error.message);
    });



    console.log("\n===== COPYING FILE =====");

    const readStream = fs.createReadStream(inputFile);
    const writeStream = fs.createWriteStream(outputFile);

    readStream.on("error", (error) => {
        console.log("Copy Reading Error:", error.message);
    });

    writeStream.on("error", (error) => {
        console.log("Copy Writing Error:", error.message);
    });

    readStream.pipe(writeStream);

    writeStream.on("finish", () => {
        console.log("File copied successfully!");
        console.log("copy.txt created successfully!");
    });
}
