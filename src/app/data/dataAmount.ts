
import { transactions } from "./rawData"
import { getRandomNumber } from "./utils/getRandomNumber"
import { destructPropObj } from "./utils/destructPropObj";
import { transformItemsArray } from "./utils/transformItemsArray"
import { checkArray } from "./utils/checkArray"
import  {extractNumberFromString} from  "./utils/extractNumberFromString"
import {extractNumbersFromArrayOfStrings} from "./utils/extractNumbersFromArrayOfStrings"
import {stringToNumber} from "./utils/stringToNumber"


const MIN = 1;
const MAX = 4000;
const AFTERDOT = 2;

const rawData = transactions.data;
const arrayAmount = destructPropObj(rawData, 'amount');


checkArray(arrayAmount);

const arrayStrings = arrayAmount[0].split(' ');

  
const result = extractNumbersFromArrayOfStrings(arrayStrings, extractNumberFromString);

const flatArray = result.flat();


const test =  getRandomNumber(MIN, MAX, AFTERDOT);
const emptyArray = Array(100)


const arrayCalcAmount = arrayAmount.map((item:any) => test);



export {arrayCalcAmount}

