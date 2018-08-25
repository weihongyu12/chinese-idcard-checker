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
import IDCardChecker from 'chinese-idcard-checker';
// or 
// const IDCardChecker = require('chinese-idcard-checker'); 

// 验证身份证有效性
IDCardChecker.validate(idCardNum); // true or false

// 获取省份
IDCardChecker.getProvince(idCardNum); // '北京市'

// 获取出生日期
IDCardChecker.getBirthDate(idCardNum);  // new Date('1949-10-1')

// 获取性别
IDCardChecker.getGender(idCardNum); // '男','女'

// 返回正则表达式常量
const pattern = IDCardChecker.pattern(); // /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
if(pattern.test(idCardNum)){
  // ...
}
```

## API

### idCardChecker.pattern() ⇒ <code>RegExp</code>
返回正则表达式

**Kind**: instance method of [<code>IDCardChecker</code>](#IDCardChecker)  
**Returns**: <code>RegExp</code> - /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/  
<a name="IDCardChecker+validate"></a>

### idCardChecker.validate(idCardNum) ⇒ <code>boolean</code>
验证身份证有效性

**Kind**: instance method of [<code>IDCardChecker</code>](#IDCardChecker)  

| Param | Type | Description |
| --- | --- | --- |
| idCardNum | <code>string</code> | 身份证号码 |

<a name="IDCardChecker+getProvince"></a>

### idCardChecker.getProvince(idCardNum) ⇒ <code>string</code> \| <code>null</code>
获取省份

**Kind**: instance method of [<code>IDCardChecker</code>](#IDCardChecker)  
**Returns**: <code>string</code> \| <code>null</code> - 身份证号码  

| Param | Type | Description |
| --- | --- | --- |
| idCardNum | <code>string</code> | 身份证号码 |

<a name="IDCardChecker+getBirthDate"></a>

### idCardChecker.getBirthDate(idCardNum) ⇒ <code>Date</code> \| <code>null</code>
获取出生日期

**Kind**: instance method of [<code>IDCardChecker</code>](#IDCardChecker)  
**Returns**: <code>Date</code> \| <code>null</code> - 出生日期  

| Param | Type | Description |
| --- | --- | --- |
| idCardNum | <code>string</code> | 身份证号码 |

<a name="IDCardChecker+getGender"></a>

### idCardChecker.getGender(idCardNum) ⇒ <code>string</code> \| <code>null</code>
获取性别

**Kind**: instance method of [<code>IDCardChecker</code>](#IDCardChecker)  
**Returns**: <code>string</code> \| <code>null</code> - '男','女'  

| Param | Type | Description |
| --- | --- | --- |
| idCardNum | <code>string</code> | 身份证号码 |

## LICENSE


