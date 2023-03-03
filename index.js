const http = require('http');
const fs = require('fs');
const server = http.createServer((req,resp) =>{
    fs.readFile('index.html', (err,data)=>{
        if(err){
            resp.writeHead(404, {'content-type': 'text/plain'})
        }else{
            resp.writeHead(200, {'content-Type': 'text/html'});
            resp.end(data)
        }
    })
})
const port = 5000;
server.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`);
})