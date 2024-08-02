const express = require('express');
const WebSocket = require('ws');

const app = express();
const port = 3000;

// Statik dosyalara erişim
app.use(express.static('public'));

// HTTP sunucusu oluşturma
const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// WebSocket sunucusu oluşturma
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    // Burada tarayıcı üzerinde istenilen eylemleri gerçekleştirin
    // Örneğin, tarayıcıyı bir URL'ye yönlendirme
    if (message === 'open_url') {
      ws.send('Navigating to a specific URL');
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
