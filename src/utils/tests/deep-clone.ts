const deepClone = (obj: object) => JSON.parse(JSON.stringify(obj));

export default deepClone;
