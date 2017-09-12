((wsUrl) => {
  let ws;
  ws = new WebSocket(wsUrl);
  ws.onopen = () => {
    console.log('ws Open')
  }
})('ws://localhost:3000');