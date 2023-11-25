import $api from "../http"
import { AxiosResponse } from "axios"
import { INews } from "../models/INews"
import { NewResponse } from "../models/response/NewResponse"

export default class NewsService {
    static fetchNews(): Promise<AxiosResponse<INews[]>> {
        return $api.get<INews[]>('/users')
    }

    static async addNew(img: string, heading: string, text: string): Promise<AxiosResponse<NewResponse>> {
        return $api.post<NewResponse>('/addNews', {img, heading, text})
    }
}
