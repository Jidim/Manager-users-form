import axios from "axios";
import { AxiosError } from "axios";
import { ERRORS } from "@/configs/httpErrors";

const HOST = import.meta.env.VITE_API_URL;

const axiosClient = axios.create({
  baseURL: HOST,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * 
 * @param error - ошибка, полученная от Axios
 * @returns Обработанное сообщение об ошибке
 */
function handleAxiosError<T>(request: () => Promise<T>) {
  return request()
    .catch((error: AxiosError) => {
      if (error.code && error.code in ERRORS) 
        throw new Error(`Ошибка запроса: ${ERRORS[error.code].message}`)
      else throw new Error(`Неизвестная ошибка: ${error.code}`)
    })
  
}

export {
  axiosClient,
  handleAxiosError,
}
