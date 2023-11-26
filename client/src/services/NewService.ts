import $api from "../http"
import { AxiosResponse } from "axios"
import { INews } from "../models/INews"
import { NewResponse } from "../models/response/NewResponse"

export default class NewsService {
    static fetchNews(): Promise<AxiosResponse<INews[]>> {
        return $api.get<INews[]>('/news')
    }

    static async addNew(heading: string, text: string): Promise<AxiosResponse<NewResponse>> {
        return $api.post<NewResponse>('/addnews', {heading, text})
    }
}
