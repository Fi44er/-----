import $api from "../http"
import { AxiosResponse } from "axios"
import { MunicipalResponse } from "../models/response/MunicipalResponse"
import { IMunicipal } from "../models/IMunicipal"

export default class MunicipalService {
    static fetchMunicipal(): Promise<AxiosResponse<IMunicipal[]>> {
        return $api.get<IMunicipal[]>('/getMunicipal')
    }

    static async regMunicipalServices(cod: string, password:string, name:string, specification:string, work_area:string, email:string): Promise<AxiosResponse<MunicipalResponse>> {
        return $api.post<MunicipalResponse>('/regMunicipalServices', {cod, password, name, specification, work_area, email})
    }
}
