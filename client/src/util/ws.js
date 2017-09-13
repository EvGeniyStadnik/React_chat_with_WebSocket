import { connectedNewUser } from 'actions';
import store from 'store'

export default ((wsUrl) => {
  let ws;
  const { dispatch } = store;
  ws = new WebSocket(wsUrl);
  window.ws = ws;
  ws.onopen = () => {
    console.log('ws Open')
  };

  ws.onmessage = message => {
    const messageObj = JSON.parse(message.data);
    console.log('ws.onmessage', message);
    switch(messageObj.type){
      case 'connected_new_user':
        dispatch(connectedNewUser(messageObj.userName));
        break
    }
    console.log(message.data);
  };

  let countRecconnect = 0;
  const emit = message => {
    if ( countRecconnect > 5 ) return;

    if( ws.readyState === ws.CONNECTING ){
      setTimeout(() => {
        emit(message);
        countRecconnect ++;
      }, 500);
      return
    }
    ws.send(message);
    countRecconnect = 0;
  };

  return { emit };

})('ws://localhost:3000');