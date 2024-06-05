const http = require("http");
require('dotenv').config(); // Carica le variabili d'ambiente da .env

// Configurazione delle variabili di ambiente
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html charset=utf-8" });
    res.end(`hello world`);
}).listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server avviato su ${serverUrl}`);
});
