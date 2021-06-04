"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.gender = exports.birthDate = exports.province = exports.pattern = exports.validate = void 0;
/**
 * IDCardChecker 中国居民身份证检查
 * @author weihongyu12<weihongyu12@outlook.com>
 * @licence MIT License
 * @version 2.0.0
 */
var validate_1 = require("./validate");
__createBinding(exports, validate_1, "default", "validate");
var pattern_1 = require("./pattern");
__createBinding(exports, pattern_1, "default", "pattern");
var province_1 = require("./province");
__createBinding(exports, province_1, "default", "province");
var birthDate_1 = require("./birthDate");
__createBinding(exports, birthDate_1, "default", "birthDate");
var gender_1 = require("./gender");
__createBinding(exports, gender_1, "default", "gender");
