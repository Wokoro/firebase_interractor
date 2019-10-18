import http from 'http';
import app from './app';

const server = http.createServer(app);

const { PORT = 3000 } = process.env;

server.listen(PORT, ()=>{
    console.log(`server listening on http://localhost:${PORT}`)
})