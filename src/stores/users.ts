import { defineStore } from "pinia";
import type { User } from "./types";
import { ref } from "vue";

export const useUsersStore = defineStore('usersStore', () => {
    const users = ref<User[]>([]) 
    
    return {
        users
    }
})