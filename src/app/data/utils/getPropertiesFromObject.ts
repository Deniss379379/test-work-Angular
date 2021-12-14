const getPropertiesFromObject = (receivedObject: object): string => {
  const arrayFromValuesObjectProperties  = Object.values(receivedObject);
  const stringFromArray = arrayFromValuesObjectProperties.join(' ');
  return stringFromArray;
};

export { getPropertiesFromObject }

