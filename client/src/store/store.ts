import { IUser } from "../models/IUser"
import { makeAutoObservable } from "mobx"
import AuthServices from "../services/AuthService"
import axios from "axios"
import { AuthResponse } from "../models/response/AuthResponse"
import { API_URL } from "../http"

export default class Store {
  user = {} as IUser
  isAuth = false
  isLoading = false
  message = ""
  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool: boolean) {
    this.isAuth = bool
  }

  setUser(user: IUser) {
    this.user = user
  }

  setMessage(message: string) {
    this.message = message
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
      throw e
    }
  }

  async registration(
    email: string,
    password: string,
    fio: string,
    phoneNumber: string
  ) {
    try {
      const response = await AuthServices.registration(
        email,
        password,
        fio,
        phoneNumber
      )
      console.log(response)
      localStorage.setItem("token", response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e: any) {
      // console.log(e.response?.data?.message)
      this.setMessage(e.response?.data?.message)
    }
  }

  async logout() {
    try {
      const response = await AuthServices.logout()
      localStorage.removeItem("token")
      this.setAuth(false)
      this.setUser({} as IUser)
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

}
