import type { User } from "@/stores/types";
import { AccountTypeEnum } from "@/stores/types";

export const users: User[] = [
  {
    marks: ['Admin', 'Main'],
    account_type: AccountTypeEnum.Local,
    login: 'admin',
    password: 'admin123'
  },
  {
    marks: ['Tech', 'Support'],
    account_type: AccountTypeEnum.Local,
    login: 'tech_support',
    password: 'asdsadasd'
  },
  {
    marks: ['Money'],
    account_type: AccountTypeEnum.LDAP,
    login: 'accountant',
    password: 'securepass'
  },
  {
    marks: ['HR', 'MOMOMO'],
    account_type: AccountTypeEnum.Local,
    login: 'hr_manager',
    password: 'asdafsdgf'
  },
  {
    marks: [],
    account_type: AccountTypeEnum.LDAP,
    login: 'user123',
    password: 'userpassword'
  }
];