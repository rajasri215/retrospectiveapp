var http = require("http");

http.createServer(function(request, response)
{
  response.writeHead("content-type":"text/plain");
  response.end("Hello World");
}
).listen(2305);

console.log("Server is listening at 2305");
