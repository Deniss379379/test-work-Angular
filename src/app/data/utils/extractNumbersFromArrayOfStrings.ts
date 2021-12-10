
const extractNumbersFromArrayOfStrings = (array:any, fn:any) => {
    const newArray = array.map((item:any) => fn(item));
    return newArray;
};


export { extractNumbersFromArrayOfStrings };
