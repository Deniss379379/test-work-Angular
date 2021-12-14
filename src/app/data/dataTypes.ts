import { transactions } from "./rawData"
import { getPropObj } from "./utils/getPropObj";
import {names} from "./dataNames";
import {arrayCalcAmount} from "./dataAmount"

const rawData: object[] = transactions.data;

const arrayOfTypes = getPropObj(rawData, 'type');

//TODO make interface 
const data:any[] = [];

const createArray = () => {
  for (let i = 0; i < 100; i++ ) {
    data.push({type: arrayOfTypes[i], name: names[i], amount: arrayCalcAmount[i]});
  }
  return data
};

createArray()

const getArrayWithTypes = (array: any,  typeForCheck:any) => {
  const result = array.filter((item:any) => item.type === typeForCheck);
  return result
};


const arrayOfIncoms = getArrayWithTypes(data, "income");

const arrayOfOutcoms = getArrayWithTypes(data, "outcome");

const arrayOfInvestments = getArrayWithTypes(data, "investment");

const arrayOfLoans = getArrayWithTypes(data, "loan");

const numberIncomsTransactions = arrayOfIncoms.length; 

const numberOutcomsTransactions = arrayOfOutcoms.length; 

const numberInvestmentsTransactions = arrayOfInvestments.length; 

const numberLoansTransactions = arrayOfLoans.length; 


const numberAllTransactions = arrayOfIncoms.length + arrayOfOutcoms.length + arrayOfInvestments.length + arrayOfLoans.length;

export {arrayOfIncoms,
        arrayOfOutcoms,
        arrayOfInvestments,
        arrayOfLoans,
        numberLoansTransactions,
        numberIncomsTransactions,
        numberOutcomsTransactions,
        numberInvestmentsTransactions,
        numberAllTransactions
        };


