import client from "./http/client";
import type { User } from "@/stores/types";

export default class UserService {

    async getUsers(): Promise<User[]> {
        return client.get('/users')
            .then(response => response as User[])
    }
}