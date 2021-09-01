//tai HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

//tao HTTP server
const sever = http.createServer((req, res) => {
  //thiet lap tieu de(header) http voi HTTP status va Content-type
  res.writeHead(200, { "Content-Type": "text/plain" });
  //gui body phan hoi(response) 'Hello Word'
  res.end("Hello Word\n");
});

//in ra nhat ki khi may chu bat dau lang nghe
sever.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
