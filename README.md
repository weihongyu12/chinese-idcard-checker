# chinese-idcard-checker

[![npm](https://img.shields.io/npm/v/chinese-idcard-checker.svg)](https://www.npmjs.com/package/chinese-idcard-checker)
[![Build Status](https://travis-ci.org/weihongyu12/chinese-idcard-checker.svg?branch=master)](https://travis-ci.org/weihongyu12/chinese-idcard-checker)
[![Coverage Status](https://coveralls.io/repos/github/weihongyu12/chinese-idcard-checker/badge.svg?branch=master)](https://coveralls.io/github/weihongyu12/chinese-idcard-checker?branch=master)

🇨🇳中华人民共和国居民身份证验证器

## 安装

```bash
yarn add chinese-idcard-checker
```

> 如果使用npm则执行 `npm install chinese-idcard-checker --save` 安装

## 用法

```javascript
import {
  validate,
  province,
  birthDate,
  gender,
  pattern,
} from 'chinese-idcard-checker';
// or 
// const IDCardChecker = require('chinese-idcard-checker'); 

// 验证身份证有效性
validate(idCardNum); // true or false

// 获取省份
province(idCardNum); // '北京市'

// 获取出生日期
birthDate(idCardNum);  // new Date('1949-10-1')

// 获取性别
gender(idCardNum); // '男','女'

// 返回正则表达式常量
if(pattern.test(idCardNum)){
  // ...
}
```

## API

### pattern ⇒ `RegExp`

返回正则表达式
 
**Returns**: `RegExp` - `/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/`

### validate(idCardNum) ⇒ `boolean`

验证身份证有效性

| Param | Type | Description |
| --- | --- | --- |
| idCardNum | `string` | 身份证号码 |

### province(idCardNum) ⇒ `string` | `null`

获取身份证所在省份

**Returns**: string | 'null' - 省份  

| Param | Type | Description |
| --- | --- | --- |
| idCardNum | `string` | 身份证号码 |

### birthDate(idCardNum) ⇒ `Date` | `null`
获取出生日期

**Returns**: `Date` | `null` - 出生日期  

| Param | Type | Description |
| --- | --- | --- |
| idCardNum | `string` | 身份证号码 |

<a name="IDCardChecker+getGender"></a>

### gender(idCardNum) ⇒ `string` | `null`

获取性别

**Returns**: `string` | `null` - '男','女'  

| Param | Type | Description |
| --- | --- | --- |
| idCardNum | `string` | 身份证号码 |

## LICENSE

MIT License
