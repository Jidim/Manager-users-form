import { defineStore } from "pinia";
import type { User } from "./types";
import { onMounted, ref } from "vue";
import UserService from "@/services/usersService";

const userService = new UserService();

export const useUsersStore = defineStore('usersStore', () => {
  const users = ref<User[]>([]);

    function addUser(user: User) {
        userService.addUser(user) 
        users.value.push(user)
  }
    
  function updateUser(user: User) {
    userService.updateUser(user);
  }

  function deleteUser(userId: string) {
    users.value = users.value.filter(user => user.id !== userId);

    userService.deleteUser(userId);
  }

  onMounted(() => {
    userService.getAllUsers().then(res => users.value = res);
  });

  return {
    users,
      addUser,
    updateUser,
    deleteUser
  };
});
