
const checkArray = (array:any) => {
    const testProperty = array[0];
    const arrayForDifferentProperties = array.filter((item:any) => {testProperty !== item});
};


export {checkArray};
