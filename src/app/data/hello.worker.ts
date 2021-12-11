/// <reference lib="webworker" />

onmessage = function(e) {
  const result = console.log("5")
//  const result = data.data[0] + data.data[1];
  postMessage(result);
};
