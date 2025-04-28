import type { User } from "@/stores/types";
import { AccountTypeEnum } from "@/stores/types";
import { accountTypes } from "@/configs/accountTypes";

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