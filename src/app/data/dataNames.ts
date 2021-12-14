import { transactions } from "./rawData"
import { getPropObj } from "./utils/getPropObj"
import { transformItemsArray } from "./utils/transformItemsArray"
import { getPropertiesFromObject } from  "./utils/getPropertiesFromObject"

const rawData: object[] = transactions.data;

const arrayName = getPropObj(rawData, 'name');

const names: string[] = transformItemsArray(arrayName, getPropertiesFromObject);

export { names };
