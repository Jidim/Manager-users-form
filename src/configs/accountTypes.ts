import type { AccountType } from "@/stores/types";
import { AccountTypeEnum } from "@/stores/types";


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