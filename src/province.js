"use strict";
exports.__esModule = true;
var validate_1 = require("./validate");
var provinces_1 = require("./provinces");
/**
 * 获取所在省份
 * @param {string} idCardNum - 身份证号码
 * @return {string|null}
 */
var province = function (idCardNum) {
    if (validate_1["default"](idCardNum)) {
        var provinceCode = idCardNum.substring(0, 2);
        return provinces_1["default"][provinceCode];
    }
    return null;
};
exports["default"] = province;
