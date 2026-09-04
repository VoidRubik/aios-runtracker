// ponytail: stdlib-only static server, no deps needed for one HTML file
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const FILE = path.join(__dirname, "index.html");

http.createServer((req, res) => {
  fs.readFile(FILE, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Failed to load index.html: " + err.message);
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log("RunTracker running at http://localhost:" + PORT);
});
