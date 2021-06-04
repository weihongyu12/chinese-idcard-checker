import validate from './validate';
/**
 * 获取性别
 * @param {string} idCardNum - 身份证号
 * @return {string|null}
 */
const gender = (idCardNum) => {
    if (validate(idCardNum)) {
        const genderCode = parseInt(idCardNum.substring(16, 17), 10);
        if (genderCode % 2 === 0) {
            return '女';
        }
        return '男';
    }
    return null;
};
export default gender;
//# sourceMappingURL=gender.js.map