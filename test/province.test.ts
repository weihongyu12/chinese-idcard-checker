import { expect } from 'chai';
import province from '../src/province';

describe('获取省份', () => {
    it('获取省份（正确）', () => {
        const result = province('11010519491231002X');
        expect(result).to.equal('北京市');
    });

    it('获取省份（错误）', () => {
        const result = province('160105194912310029');
        expect(result).to.equal(null);
    });
});
