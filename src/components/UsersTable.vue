<script lang="ts" setup>
import { useUsersStore } from '@/stores/users';
import AppSelect from './AppSelect.vue';
import AppMultiplyInput from './AppMultiplyInput.vue';
import AppInput from './AppInput.vue';
import { accountTypes } from '@/configs/accountTypes';
import type { User } from '@/stores/types';
import { AccountTypeEnum } from '@/stores/types';
import { ref } from 'vue';

const userStore = useUsersStore()

const deleteUser = (index: number) => {
    userStore.users.splice(index, 1)
}

const changeAccountType = (user: User) => {
    switch (user.account_type) {
        case AccountTypeEnum.LDAP:
            user.account_type = AccountTypeEnum.Local

        case AccountTypeEnum.Local:
            user.account_type = AccountTypeEnum.LDAP
            user.password = ''
    }
}

const showPasswords = ref<Record<string, boolean>>({})

function togglePassword(login: string) {
    showPasswords.value[login] = !showPasswords.value[login]
}
</script>

<template>
    <table v-if="userStore.users.length > 0" class="user-table">
        <thead>
            <tr>
                <th>Метки</th>
                <th>Тип записи</th>
                <th>Логин</th>
                <th>Пароль</th>
                <th>Действия</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user, index of userStore.users" :key="user.login">
                <td>
                    <AppMultiplyInput v-model="user.marks" placeholder="Укажите метки" join-separate=";" />
                </td>
                <td>
                    <AppSelect @update:model-value="changeAccountType(user)"
                        :options="Object.values(accountTypes).map(el => ({ label: el.label, value: el.id }))"
                        v-model="user.account_type" />
                </td>
                <td :colspan="user.account_type != AccountTypeEnum.LDAP ? 1 : 2">
                    <AppInput v-model="user.login" :required="true" placeholder="Логин пользователя" />
                </td>
                <td v-if="user.account_type != AccountTypeEnum.LDAP" class="password-cell">
                    <div class="password-wrapper">
                        <AppInput v-model="user.password" :type="showPasswords[user.login] ? 'text' : 'password'"
                            placeholder="Пароль" />
                        <button type="button" class="eye-button" aria-label="Показать/скрыть пароль"
                            @click="togglePassword(user.login)">
                            {{ showPasswords[user.login] ? '🙈' : '👁️' }}
                        </button>
                    </div>
                </td>
                <td>
                    <button type="button" @click="deleteUser(index)" class="delete-button"
                        aria-label="Удалить запись">🗑️</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style lang="scss" scoped>
.user-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;

    thead {
        background-color: #f5f5f5;

        th {
            text-align: left;
            padding: 12px;
            font-weight: bold;
            font-size: 14px;
            color: #333;
            border-bottom: 2px solid #ddd;
        }
    }

    tbody {
        tr {
            transition: background-color 0.2s;

            &:hover {
                background-color: #fafafa;
            }

            td {
                padding: 10px 12px;
                border-bottom: 1px solid #eee;
                vertical-align: middle;
            }

            .password-cell {
                .password-wrapper {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .eye-button {
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 18px;
                }
            }

            .delete-button {
                background: none;
                border: none;
                color: #e74c3c;
                font-size: 20px;
                cursor: pointer;
                transition: color 0.2s;

                &:hover {
                    color: #c0392b;
                }
            }
        }
    }
}
</style>