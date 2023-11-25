import { IMunicipal } from "../IMunicipal"

export interface MunicipalResponse {
  accessToken: string
  refreshToken: string
  municipal: IMunicipal
}
