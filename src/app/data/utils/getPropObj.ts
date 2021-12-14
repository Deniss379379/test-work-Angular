/*
 * TODO replase from array.map to simple loop. Becouse
 * if remove type <any> in "item:any" throw error, replase other types don't help
*/
const getPropObj = (array: any, property:  any) => {
  const newData = array.map((item:any) => item[property])

  return newData;
};
 
export { getPropObj };
