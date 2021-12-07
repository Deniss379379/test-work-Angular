function getStringFromValuesObjectProperties (receivedObject: object): string {
  const arrayFromValuesObjectProperties: string[]  = Object.values(receivedObject);
  const stringFromArray: string = arrayFromValuesObjectProperties.join('');
  return stringFromArray;
};

export {getStringFromValuesObjectProperties}

