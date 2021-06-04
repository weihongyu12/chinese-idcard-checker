import { isValid, parse } from 'date-fns';
import pattern from './pattern';
import provinces from './provinces';
const checkCode = (idCardNum) => {
    const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const parity = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    const code = idCardNum.substring(17);
    const sum = idCardNum
        .split('')
        .filter((currentValue, index) => index < 17)
        // eslint-disable-next-line max-len
        .reduce((accumulator, currentValue, index) => accumulator + parseInt(currentValue, 10) * factor[index], 0);
    return parity[sum % 11] === code.toUpperCase();
};
const checkDate = (idCardNum) => {
    const birthDate = idCardNum.substring(6, 14);
    return isValid(parse(birthDate, 'yyyyMMdd', new Date()));
};
const checkProvince = (idCardNum) => {
    const provinceCode = idCardNum.substring(0, 2);
    return !!provinces[provinceCode];
};
/**
 * 验证身份证号
 * @param {string} idCardNum - 身份证号
 * @return {boolean}
 */
const validate = (idCardNum) => {
    const validateCode = checkCode(idCardNum);
    const validateDate = checkDate(idCardNum);
    const validateProvince = checkProvince(idCardNum);
    return pattern.test(idCardNum) && validateCode && validateDate && validateProvince;
};
export default validate;
//# sourceMappingURL=validate.js.map