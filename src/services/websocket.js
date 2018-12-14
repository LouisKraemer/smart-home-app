const ws = new WebSocket("ws://192.168.0.10:6767/");

const handleWs = () => {
  ws.onopen = () => {};

  ws.onmessage = e => {
    console.log(e.data);
  };

  ws.onerror = e => {
    // an error occurred
    console.log(e.message);
  };

  ws.onclose = e => {
    // connection closed
    console.log(e.code, e.reason);
  };
};

export { handleWs };
