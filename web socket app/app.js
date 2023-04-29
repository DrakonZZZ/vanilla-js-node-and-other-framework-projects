import http from 'node:http';
import express from 'express';
import { Server } from 'socket.io';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import path from 'node:path';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  io.emit('user connected', 'A User Connected');

  socket.on('user message', (message) => {
    io.emit('user message', message);
  });

  socket.on('disconnect', () => {
    io.emit('user disconnected', 'user disconnected');
    console.log('user disconnected');
  });
});

app.get('/', (req, res) => {
  const fileName = __dirname + '/public/index.html';
  res.sendFile(fileName, (err) => {
    if (err) throw Error(err);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
