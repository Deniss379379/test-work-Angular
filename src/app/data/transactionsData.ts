import { transactions } from "./rawData"
import { getRandomNumber } from "./utils/getRandomNumber"
import { destructPropObj } from "./utils/destructPropObj";
import { transformItemsArray } from "./utils/transformItemsArray"


let test51 = 1;
let test52 = 2;

console.log("1")

const data = transactions.data;


if (typeof Worker !== "undefined") {
  const worker = new Worker("hello.worker", {type: 'module'});
  console.log("2")
  worker.postMessage([test51, test52]);
  worker.onmessage = ({data}:any) => {
  console.log(Worker.data)
  };
  console.log("3")
  console.log("4")
//  else {
    // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.

//  }


}



