<script setup lang="ts">
import { useUsersStore } from '@/stores/users';
import type { User } from '@/stores/types';
import { AccountTypeEnum } from '@/stores/types';
import { v4 as uuidv4 } from 'uuid';

const userStore = useUsersStore()

const addUser = () => {
  const newUser: User = {
    id: uuidv4(),
    marks: [],
    account_type: AccountTypeEnum.Local,
    login: uuidv4(),
    password: ''
  }

  userStore.addUser(newUser)
}
</script>

<template>
  <header class="page-header">
    <h1>Учетные записи</h1>
    <button type="button" @click="addUser" aria-label="Добавить учетную запись" class="add-button">+</button>
  </header>
</template>

<style lang="scss" scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #e0e0e0;

  h1 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: #333;
  }

  .add-button {
    background-color: #409eff;
    color: white;
    border: none;
    border-radius: 6px;
    width: 36px;
    height: 36px;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #66b1ff;
    }

    &:active {
      background-color: #3a8ee6;
    }
  }
}
</style>