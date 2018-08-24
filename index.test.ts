import { expect } from 'chai';
import IDCardChecker from './index';

describe('验证中国居民身份证', () => {
  it('正确的身份证', () => {
    const result = IDCardChecker.validate('11010519491231002X');
    expect(result).to.equal(true);
  });

  it('地区码不符', () => {
    const result = IDCardChecker.validate('160105194912310029');
    expect(result).to.equal(false);
  });

  it('日期码不符', () => {
    const result = IDCardChecker.validate('110105194902310026');
    expect(result).to.equal(false);
  });

  it('校验码不符', () => {
    const result = IDCardChecker.validate('110105194912310021');
    expect(result).to.equal(false);
  });

  it('获取省份', () => {
    const result = IDCardChecker.getProvince('11010519491231002X');
    expect(result).to.equal('北京市');
  });

  it('获取出生日期', () => {
    const result = IDCardChecker.getBirthDate('11010519491231002X');
    expect(result).to.equal(new Date('1949-12-31'));
  });

  it('获取性别', () => {
    const result = IDCardChecker.getGender('11010519491231002X');
    expect(result).to.equal('女');
  });
});
