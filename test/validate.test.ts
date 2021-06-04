import { expect } from 'chai';
import validate from '../src/validate';

describe('验证中国居民身份证', () => {
  it('正确的身份证', () => {
    const result = validate('11010519491231002X');
    expect(result).to.equal(true);
  });

  it('地区码不符', () => {
    const result = validate('160105194912310029');
    expect(result).to.equal(false);
  });

  it('日期码不符', () => {
    const result = validate('110105194902310026');
    expect(result).to.equal(false);
  });

  it('校验码不符', () => {
    const result = validate('110105194912310021');
    expect(result).to.equal(false);
  });
});
