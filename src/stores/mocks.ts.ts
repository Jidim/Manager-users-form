import type { User, AccountType } from "./types";
import { AccountTypeEnum } from "./types";


export const accountTypes: AccountType = {
  [AccountTypeEnum.Local]: {
    id: AccountTypeEnum.Local,
    label: 'Локальная'
  },
  [AccountTypeEnum.LDAP]: {
    id: AccountTypeEnum.LDAP,
    label: 'LDAP'
  }
} as const

export const users: User[] = [
  {
    marks: ['Admin', 'Main'],
    account_type: accountTypes[AccountTypeEnum.Local],
    login: 'admin',
    password: 'admin123'
  },
  {
    marks: ['Tech', 'Support'],
    account_type: accountTypes[AccountTypeEnum.Local],
    login: 'tech_support',
    password: 'asdsadasd'
  },
  {
    marks: ['Money'],
    account_type: accountTypes[AccountTypeEnum.LDAP],
    login: 'accountant',
    password: 'securepass'
  },
  {
    marks: ['HR', 'MOMOMO'],
    account_type: accountTypes[AccountTypeEnum.Local],
    login: 'hr_manager',
    password: 'asdafsdgf'
  },
  {
    marks: [],
    account_type: accountTypes[AccountTypeEnum.LDAP],
    login: 'user123',
    password: 'userpassword'
  }
];