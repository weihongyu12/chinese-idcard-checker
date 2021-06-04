"use strict";
exports.__esModule = true;
var validate_1 = require("./validate");
/**
 * 获取性别
 * @param {string} idCardNum - 身份证号
 * @return {string|null}
 */
var gender = function (idCardNum) {
    if (validate_1["default"](idCardNum)) {
        var genderCode = parseInt(idCardNum.substring(16, 17), 10);
        if (genderCode % 2 === 0) {
            return '女';
        }
        return '男';
    }
    return null;
};
exports["default"] = gender;
