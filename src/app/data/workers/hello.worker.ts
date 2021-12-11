/// <reference lib="webworker" />

addEventListener('message', ( data ) => {
  console.log("5")
  const response = `worker response to ${data}`;
  postMessage(response);
});
