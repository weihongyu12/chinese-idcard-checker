import { parse } from 'date-fns';
import validate from './validate';
/**
 * 获取出生日期
 * @param {string} idCardNum - 身份证号码
 * @return {Date|null} - 出生日期
 */
const birthDate = (idCardNum) => {
    if (validate(idCardNum)) {
        const birthDateString = `${idCardNum.substring(6, 14)}+00`;
        return parse(birthDateString, 'yyyyMMddX', new Date());
    }
    return null;
};
export default birthDate;
//# sourceMappingURL=birthDate.js.map