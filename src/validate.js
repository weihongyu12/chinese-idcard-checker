"use strict";
exports.__esModule = true;
var date_fns_1 = require("date-fns");
var pattern_1 = require("./pattern");
var provinces_1 = require("./provinces");
var checkCode = function (idCardNum) {
    var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    var parity = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    var code = idCardNum.substring(17);
    var sum = idCardNum
        .split('')
        .filter(function (currentValue, index) { return index < 17; })
        // eslint-disable-next-line max-len
        .reduce(function (accumulator, currentValue, index) { return accumulator + parseInt(currentValue, 10) * factor[index]; }, 0);
    return parity[sum % 11] === code.toUpperCase();
};
var checkDate = function (idCardNum) {
    var birthDate = idCardNum.substring(6, 14);
    return date_fns_1.isValid(date_fns_1.parse(birthDate, 'yyyyMMdd', new Date()));
};
var checkProvince = function (idCardNum) {
    var provinceCode = idCardNum.substring(0, 2);
    return !!provinces_1["default"][provinceCode];
};
/**
 * 验证身份证号
 * @param {string} idCardNum - 身份证号
 * @return {boolean}
 */
var validate = function (idCardNum) {
    var validateCode = checkCode(idCardNum);
    var validateDate = checkDate(idCardNum);
    var validateProvince = checkProvince(idCardNum);
    return pattern_1["default"].test(idCardNum) && validateCode && validateDate && validateProvince;
};
exports["default"] = validate;
