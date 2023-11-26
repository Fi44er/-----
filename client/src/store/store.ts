import { IUser } from "../models/IUser"
import { makeAutoObservable } from "mobx"
import AuthServices from "../services/AuthService"
import axios from "axios"
import { AuthResponse } from "../models/response/AuthResponse"
import { API_URL } from "../http"
import { IMunicipal } from "../models/IMunicipal"
import MunicipalService from "../services/MunicipalService"

export default class Store {
  municipal = {} as IMunicipal
  user = {} as IUser
  isAuth = false
  isLoading = false
  message = ""
  regMessage =''
  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool: boolean) {
    this.isAuth = bool
  }

  setUser(user: IUser) {
    this.user = user
  }

  setMunicipal(municipal: IMunicipal) {
    this.municipal = municipal
  }

  setMessage(message: string) {
    this.message = message
  }

  setregMessage(regMessage: string) {
    this.regMessage = regMessage
  }

  setLoading(bool: boolean) {
    this.isLoading = bool
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthServices.login(email, password)
      console.log(response)
      localStorage.setItem("token", response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e: any) {
      // console.log(e.response?.data?.message)
      this.setMessage(e.response?.data?.message)
    }
  }

  async registration(
    email: string,
    password: string,
    fio: string,
    phoneNumber: string,
    address: string
  ) {
    try {
      const response = await AuthServices.registration(
        email,
        password,
        fio,
        phoneNumber,
        address
      )
      console.log(response)
      localStorage.setItem("token", response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e: any) {
      // console.log(e.response?.data?.message)
      this.setregMessage(e.response?.data?.message)
    }
  }

  async logout() {
    try {
      const response = await AuthServices.logout()
      localStorage.removeItem("token")
      this.setAuth(false)
      this.setUser({} as IUser)
      location.href='/'
    } catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }

  async checkAuth() {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true,})
      console.log(response)

      localStorage.setItem("token", response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }

  async regMunicipalServices(
    cod: string,
    name: string,
    specification: string,
    work_area: string,
    email: string,
    password: string
  ) {
    try {
      const response = await MunicipalService.regMunicipalServices(
        cod,
        name,
        specification,
        work_area,
        email,
        password
      )
      console.log(response)
      localStorage.setItem("token", response.data.accessToken)
      this.setAuth(true)
      this.setMunicipal(response.data.municipal)
    } catch (e: any) {
      // console.log(e.response?.data?.message)
      this.setMessage(e.response?.data?.message)
    }
  }

}
