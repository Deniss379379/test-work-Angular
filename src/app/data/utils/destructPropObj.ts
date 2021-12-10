
const destructPropObj = (array: any, properties: string) => {
  const newData = array.map((item:any) => item[properties])
  return newData;
};

export { destructPropObj };
