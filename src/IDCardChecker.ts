/**!
 * IDCardChecker 中国居民身份证检查
 * @author weihongyu12<weihongyu12@outlook.com>
 * @licence MIT License
 * @version 1.0.3
 */

/**
 * IDCardChecker
 * @class
 */
class IDCardChecker {
  private provinces: any = {
    11: '北京市',
    12: '天津市',
    13: '河北省',
    14: '山西省',
    15: '内蒙古自治区',
    21: '辽宁省',
    22: '吉林省',
    23: '黑龙江省',
    31: '上海市',
    32: '江苏省',
    33: '浙江省',
    34: '安徽省',
    35: '福建省',
    36: '江西省',
    37: '山东省',
    41: '河南省',
    42: '湖北省',
    43: '湖南省',
    44: '广东省',
    45: '广西壮族自治区',
    46: '海南省',
    50: '重庆市',
    51: '四川省',
    52: '贵州省',
    53: '云南省',
    54: '西藏自治区',
    61: '陕西省',
    62: '甘肃省',
    63: '青海省',
    64: '宁夏回族自治区',
    65: '新疆维尔吾族自治区',
    71: '台湾省',
    81: '香港特别行政区',
    82: '澳门特别行政区',
  };

  /**
   * 验证地区码
   * @param {string} provinceCode - 地区名，身份证前2位
   * @return {boolean}
   * @private
   */
  private checkProvince(provinceCode: string): boolean {
    const pattern = /^[1-9][0-9]/;
    if (pattern.test(provinceCode)) {
      if (this.provinces[provinceCode]) {
        return true;
      }
    }
    return false;
  }

  /**
   * 验证日期码
   * @param {string} dateString - 日期码，身份证第7-14位
   * @return {boolean}
   * @private
   */
  private checkDate(dateString: string): boolean {
    const pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
    if (pattern.test(dateString)) {
      const year = this.getYear(dateString);
      const month = this.getMonth(dateString);
      const date = this.getDay(dateString);
      const fullDate = new Date(`${year}-${month}-${date}`);
      if (fullDate && fullDate.getMonth() === month - 1) {
        return true;
      }
    }

    return false;
  }

  /**
   * 验证校验码
   * @param {string} idCardNum - 身份证号码
   * @return {boolean}
   * @private
   */
  private checkCode(idCardNum: string): boolean {
    const pattern = this.pattern();
    const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const parity = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    const code = idCardNum.substring(17);
    if (pattern.test(idCardNum)) {
      let sum = 0;
      idCardNum.split('').forEach((item: string, index: number) => {
        if (index < 17) {
          sum += parseInt(item) * factor[index];
        }
      });
      if (parity[sum % 11] === code.toUpperCase()) {
        return true;
      }
    }

    return false;
  }

  /**
   * 获取年份
   * @param {string} dateString - 日期码，身份证第7-14位
   * @return {number} - 年份
   * @private
   */
  private getYear(dateString: string): number {
    return parseInt(dateString.substring(0, 4));
  }

  /**
   * 获取月份
   * @param {string} dateString - 日期码，身份证第7-14位
   * @return {number} - 月份
   * @private
   */
  private getMonth(dateString: string): number {
    return parseInt(dateString.substring(4, 6));
  }

  /**
   * 获取日期
   * @param {string} dateString - 日期码，身份证第7-14位
   * @return {number} - 日期
   * @private
   */
  private getDay(dateString: string): number {
    return parseInt(dateString.substring(6, 8));
  }

  /**
   * 返回正则表达式
   * @return {RegExp} /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
   */
  pattern(): RegExp {
    return /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  }

  /**
   * 验证身份证有效性
   * @param {string} idCardNum - 身份证号码
   * @return {boolean}
   */
  validate(idCardNum: string): boolean {
    if (this.checkCode(idCardNum)) {
      const birthDate = idCardNum.substring(6, 14);
      if (this.checkDate(birthDate)) {
        if (this.checkProvince(idCardNum.substring(0, 2))) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * 获取省份
   * @param {string} idCardNum - 身份证号码
   * @return {string|null} 身份证号码
   */
  getProvince(idCardNum: string): string | null {
    if (this.validate(idCardNum)) {
      const provinceCode = idCardNum.substring(0, 2);
      return this.provinces[provinceCode];
    }
    return null;
  }

  /**
   * 获取出生日期
   * @param {string} idCardNum - 身份证号码
   * @return {Date|null} 出生日期
   */
  getBirthDate(idCardNum: string): Date | null {
    if (this.validate(idCardNum)) {
      const birthDate = idCardNum.substring(6, 14);
      const year = this.getYear(birthDate);
      const month = this.getMonth(birthDate);
      const date = this.getDay(birthDate);
      return new Date(`${year}-${month}-${date}`);
    }
    return null;
  }

  /**
   * 获取性别
   * @param {string} idCardNum - 身份证号码
   * @return {string|null} '男','女'
   */
  getGender(idCardNum: string): string | null {
    if (this.validate(idCardNum)) {
      const genderCode = parseInt(idCardNum.substring(16, 17));
      if (genderCode % 2 === 0) {
        return '女';
      }
      return '男';
    }
    return null;
  }
}

export default new IDCardChecker();
