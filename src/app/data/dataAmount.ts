
//import { transactions } from "./rawData"
import { getRandomNumber } from "./utils/getRandomNumber"
//import { getPropObj } from "./utils/destructPropObj";
//import { checkArray } from "./utils/checkArray"
//import  {extractNumberFromString} from  "./utils/extractNumberFromString"
import { MIN_NUMBER, MAX_NUMBER, AFTERDOT } from "../constants";
//import { transformItemsArray } from "./utils/transformItemsArray";

//const rawData: object[] = transactions.data;
//const arrayAmount: string[] = getPropObj(rawData, 'amount');

//checkArray(arrayAmount);

//TODO check equlity items

//const arrayStrings: string[] = arrayAmount[0].split(' ');
  
//const result  = transformItemsArray(arrayStrings, extractNumberFromString);
//const flatArray  = result.flat();

//const [min, max, afterDot] = flatArray;

//TODO check equlity numbers

const data:any[] = [];

const createArray = () => {

  for (let i = 0; i < 100; i++) {
  
    data.push(getRandomNumber(MIN_NUMBER, MAX_NUMBER, AFTERDOT));
  }

  return data

};

//createArray()

const arrayCalcAmount = createArray();
console.log(arrayCalcAmount)

export { arrayCalcAmount };

