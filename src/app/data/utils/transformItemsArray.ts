const transformItemsArray = (array: any[], fn: Function): any[] => {
    const newArray = array.map((item) => fn(item))
    return newArray;
}

export { transformItemsArray };
