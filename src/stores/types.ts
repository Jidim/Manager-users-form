 type AccountTypeRecord = {
  id: number;
  label: string;
};

export  enum AccountTypeEnum {
  Local = 1,
  LDAP = 2
}

export type AccountType = Record<AccountTypeEnum, AccountTypeRecord>;

export type User = {
    marks: string[],
    account_type:  AccountTypeEnum,
    login: string,
    password: string

}