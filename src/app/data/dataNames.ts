import { transactions } from "./rawData"
import { destructPropObj } from "./utils/destructPropObj"
import { transformItemsArray } from "./utils/transformItemsArray"
import { getStringFromValuesObjectProperties } from  "./utils/getPropertiesFromObject"

const rawData = transactions.data;

const arrayName = destructPropObj(rawData, 'name');

const names = transformItemsArray(arrayName, getStringFromValuesObjectProperties)

export { names };
