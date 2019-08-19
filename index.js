// create server
const http = require('http');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // using req
  if(req.url === "/") {
    res.statusCode = 302;
    res.setHeader("Location", "/newpage");
  }
  // response
  res.statusCode = 200; // response status
  res.setHeader('Content-Type', 'text/html'); // headers
  res.end('<h1>Hello, World!</h1>'); // close response
});

// request
http.get({
    hostname: 'localhost',
    port: 80,
    path: '/',
    agent: false  // create a new agent just for this one request
}, (res) => {
   // Do stuff with response
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
