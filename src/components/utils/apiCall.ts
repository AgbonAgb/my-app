import axios, { AxiosInstance } from "axios"
import { config } from "process"

export const apiCall = () => {
    const instance: AxiosInstance = axios.create({
        baseURL: "" ,
        env: {
            FormData : globalThis?.FormData
        }
    })

    instance.interceptors.request.use(
        // function (config:any){
        //     config.headers= {

        //     }
        // }
      
    )
}