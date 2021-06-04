export type ValidateHandle = (idCardNum: string) => boolean;

export type BirthDateHandle = (idCardNum: string) => Date | null;

type Gender = '男' | '女';

export type GenderHandle = (idCardNum: string) => Gender | null;

export type ProvinceHandle = (idCardNum: string) => string | null;

export default interface IDCardChecker {
  pattern: RegExp;
  validate: ValidateHandle;
  birthDate: BirthDateHandle;
  gender: GenderHandle;
  province: ProvinceHandle;
}
