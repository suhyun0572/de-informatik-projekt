import * as WS from 'ws';

const ws = new WS('ws://127.0.0.1:8080');

ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function incoming(data) {
  console.log(data);
});