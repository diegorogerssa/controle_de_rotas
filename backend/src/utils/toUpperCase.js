const toUpperCaseObject = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      newObj[key] = obj[key].toUpperCase();
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

module.exports = toUpperCaseObject;