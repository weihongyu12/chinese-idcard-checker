import validate from './validate';
import { GenderHandle } from '../types';

/**
 * 获取性别
 * @param {string} idCardNum - 身份证号
 * @return {string|null}
 */
const gender: GenderHandle = (idCardNum) => {
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
