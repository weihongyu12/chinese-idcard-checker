import { expect } from 'chai';
import birthDate from '../src/birthDate';

describe('获取出生日期', () => {
  it('获取出生日期（正确）', () => {
    const result = birthDate('11010519491231002X')?.getTime();
    expect(result).to.equal(new Date('1949-12-31').getTime());
  });

  it('获取出生日期（错误）', () => {
    const result = birthDate('110105194902310026');
    expect(result).to.equal(null);
  });
});
