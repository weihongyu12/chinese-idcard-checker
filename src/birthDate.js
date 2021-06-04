"use strict";
exports.__esModule = true;
var date_fns_1 = require("date-fns");
var validate_1 = require("./validate");
/**
 * 获取出生日期
 * @param {string} idCardNum - 身份证号码
 * @return {Date|null} - 出生日期
 */
var birthDate = function (idCardNum) {
    if (validate_1["default"](idCardNum)) {
        var birthDateString = idCardNum.substring(6, 14) + "+00";
        return date_fns_1.parse(birthDateString, 'yyyyMMddX', new Date());
    }
    return null;
};
exports["default"] = birthDate;
