import http from 'http';
import "dotenv/config";
import { myDateTime } from "./myModule.js";
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(myDateTime());
  res.end('lama samir');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


