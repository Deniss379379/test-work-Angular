const regex = /([0-9]+)/g;

const extractNumberFromString = (string: any): number => {
    const newNumber = string.match(regex);
    return newNumber;
};

export { extractNumberFromString };
