import validate from './validate';
import provinces from './provinces';
import { ProvinceHandle } from '../types';

/**
 * 获取所在省份
 * @param {string} idCardNum - 身份证号码
 * @return {string|null}
 */
const province: ProvinceHandle = (idCardNum) => {
  if (validate(idCardNum)) {
    const provinceCode = idCardNum.substring(0, 2);
    return provinces[provinceCode];
  }
  return null;
};

export default province;
