/**
 * Check the string is integer or not
 * @param {*} str - (String) the string to be verified
 * @returns Boolean
 */
const isInteger = (str: string) => (str ? Number.isInteger(Number(str)) : false);

/**
 * Check the string is ISO Date or not
 * @param {*} str - (String) the string to be verified
 * @returns Boolean
 */
const isIsoDate = (str: string) => {
  const reg = /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])T([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)(?:\.\d*)?(([+-]([0-1]\d|2[0-3]):([0-5]\d)|Z)?)$/;
  return reg.test(str);
};

export default {
  isInteger,
  isIsoDate,
};
