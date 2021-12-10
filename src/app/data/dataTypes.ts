import { transactions } from "./rawData"
import { getRandomNumber } from "./utils/getRandomNumber"
import { destructPropObj } from "./utils/destructPropObj";
import { transformItemsArray } from "./utils/transformItemsArray"
import {names} from "./dataNames";
import {arrayCalcAmount} from "./dataAmount"
import {transition} from "@angular/animations";
  const rawData = transactions.data;


console.log(arrayCalcAmount)
console.log(names)



const arrayOfTypes = destructPropObj(rawData, 'type');

console.log(arrayOfTypes)



/*
transaction.type = arrayOfTypes[0];
transaction.name = names[0];
transaction.amount = arrayCalcAmount[0];
console.log(transaction);
*/



const data:any[] = [];

const createArray = () => {


  for (let i = 0; i < 100; i++ ) {
  
data.push({type: arrayOfTypes[i], name: names[i], amount: arrayCalcAmount[i] });
}
return data

};

createArray()

console.log(data)

//const rawData = () => emptyArray.map



//const getIndexOfValue = arrayOfTypes

/*
const arrayOfTypes2 = (array:any) => {
const iteratorArray = array.entries();
const newArray = [];
for (let e of iteratorArray ) {
  newArray.push(e)
}
return newArray
}
*/
//const arrayOfTypes3 = arrayOfTypes2(arrayOfTypes);


//outcome | income | investment | loan
//

const income = "income";
const outcome = "outcome";
const investment = "investment";
const loan = "loan";

console.log(typeof transactions)


const getArrayWithTypes = (array:any, typeForCheck:any) => {
  const result = array.filter((item:any) => item.type === typeForCheck);
  return result
};

const arrayOfIncoms = getArrayWithTypes(data, income);

const arrayOfOutcoms = getArrayWithTypes(data, outcome);

const arrayOfInvestments = getArrayWithTypes(data, investment);

const arrayOfLoans = getArrayWithTypes(data, loan);

console.log(arrayOfIncoms);
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
        }


/*
switch (arrayOfTypes3[item][1]) {
  case "outcome": 
    arrayOfOutcoms.push(item)
  case "income":

}
}
*/
//const filter = 


//const filterArrays = (array) => {
  
//const arrayForFilter = array.filter()

//};


//switch (array[].2)
/*
console.log(arrayOfTypes3[12][1])
const array1 = ['a', 'b', , 'c'];

console.log(array1.length)
delete array1[1]
console.log(array1.length)
array1.forEach(element => console.log(element));
*/

export {rawData as transactions};

/*
console.log(arrayOfTypes2(arrayOfTypes))

console.log(arrayStrings);
console.log(extractNumberFromStrng(arrayStrings[1]));
console.log(flatArray);
console.log(transformItemsArray(flatArray, stringToNumber))

console.log(result[2])
console.log(arrayOfTypes3);


console.log(arrayName);
console.log(arrayAmount);

console.log(transformItemsArray(arrayAmount, test))

console.log(result);
*/

