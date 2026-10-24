// publisher.js 物联网数据发布服务
const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/data'){
        const data = {
            temp: (20 + Math.random()*10).toFixed(1),
            hum: (40 + Math.random()*20).toFixed(1),
            time: new Date().toLocaleString()
        }
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(data));
    }
})
server.listen(3000, ()=>{
    console.log("服务启动，端口3000");
})