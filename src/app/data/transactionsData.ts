import { transactions } from "./rawData"
import { getRandomNumber } from "./utils/getRandomNumber"
import { destructPropObj } from "./utils/destructPropObj";
import { transformItemsArray } from "./utils/transformItemsArray"
import "./dataNames";
const data = transactions.data;

const emptyObject  = {};

const rawData = Object.assign(emptyObject, data);




//console.log(rawData)
