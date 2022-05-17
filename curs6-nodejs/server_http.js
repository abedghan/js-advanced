var  http = require('http');
var port =3001;
let server =http.createServer(function(req,res){
    res.writeHead(
        200,{
            'content-type':'text/html',
            'access-Control-Allow-Oeigin':'*',
        },
    );

res.write('Hello World');
res.end();
server.listen(port);
});