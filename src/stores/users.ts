import { defineStore } from "pinia";
import type { User } from "./types";
import { onMounted, ref } from "vue";
import UserService from "@/services/usersService";

const userService = new UserService()

export const useUsersStore = defineStore('usersStore', () => {
    const users = ref<User[]>([]) 

    onMounted(() => {
        userService.getUsers().then(res => users.value = res) 
    })

    return {
        users
    }
})