import { expect } from 'chai';
import gender from '../src/gender';

describe('获取性别', () => {
  it('获取性别（女）', () => {
    const result = gender('11010519491231002X');
    expect(result).to.equal('女');
  });

  it('获取性别（男）', () => {
    const result = gender('350724199111282910');
    expect(result).to.equal('男');
  });

  it('获取性别（身份证号错误）', () => {
    const result = gender('110105194912310021');
    expect(result).to.equal(null);
  });
});
