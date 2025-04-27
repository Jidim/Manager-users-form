import { axiosClient, handleAxiosError } from "./axios"


// Типы работающие на основе схемы api
// при использовании в методах клиента можно заменить (url: string) на (url: Operations[<метод>])

// type Methods = Exclude<{
//     [K in keyof paths]: keyof paths[K]
// }[keyof paths], "parameters">


// type UrlsOfMethod<T extends Methods> = {
//     [K in keyof paths]: T extends keyof paths[K] ? (paths[K][T] extends undefined ? never : K) : never
// }[keyof paths];

// type Operations = {
//     [METHOD in Methods]: UrlsOfMethod<METHOD>
// }

const client = {
    get(url: string) {
        return handleAxiosError(() => axiosClient.get(url))
    },
    post(url: string, body: { [name: string]: unknown }) {
        return handleAxiosError(() => axiosClient.post(url, body))
    },
    put(url: string, body: { [name: string]: unknown }) {
        return handleAxiosError(() => axiosClient.put(url, body))
    },
    delete(url: string) {
        return handleAxiosError(() => axiosClient.delete(url))
    }
}

export default client