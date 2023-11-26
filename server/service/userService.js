const connection = require('../database/db')
const bcrypt = require('bcrypt')
// const uuid= require('uuid')
const tokenService = require('./tokenService')
const UserDto = require('../dtos/userDto')
const MunicipalServicesDto = require('../dtos/municipalServicesDto')
const ApiError = require('../exceptions/apiError')
const jwt = require('jsonwebtoken')

class UserService {
    // USER
    async registration(email, password, fio, phoneNumber) {
        const connect = await connection
        const [rows, fields] = await connect.execute('SELECT * FROM `users` WHERE `email` = ?', [email]);
        if(rows[0]) {
            throw ApiError.BadRequest(`Пользователь с почтой ${email} уже существует`)
        }else{
            const hashPassword = await bcrypt.hash(password, 3)
            const dateNow = new Date()
            const date = `${dateNow.getFullYear()}-${dateNow.getMonth()+1}-${dateNow.getDate()} ${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`
            await connect.execute("INSERT INTO `users`(`email`, `password`, `fio`, `phone_number`, `reg_time`) VALUES(?,?,?,?,?)", [email, hashPassword, fio, phoneNumber, date])
            const user = await connect.execute('SELECT * FROM `users` WHERE `email` = ?', [email]);
    
            const userDto = new UserDto(user[0][0]) // id, email, isActivated
            const tokens = tokenService.generateTokens({...userDto})
            await tokenService.saveToken(userDto.id, tokens.refreshToken, null)
    
            return {...tokens, user: userDto}
        }
    }

    async login(email, password) {
        const connect = await connection
        const [rows, fields] = await connect.execute('SELECT * FROM `users` WHERE `email` = ?', [email]);
        console.log(rows);

        if(!rows[0]) {
            throw ApiError.BadRequest(`Пользователь с почтой ${email} не найден`)
        }
        const isPassEquals = await bcrypt.compare(password, rows[0].password)
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль')
        }
        const userDto = new UserDto(rows[0])
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken, null)
        return {...tokens, user: userDto}
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken) {
        if(!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)

        if(!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }

        const connect = await connection
        const user = await connect.execute('SELECT * FROM `users` WHERE `id` = ?', [tokenFromDb[0].user]); // user

        const userDto = new UserDto(user[0][0])
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken, null)
        return {...tokens, user: userDto}
    }

    async getAllUsers() {
        const connect = await connection

        const users = await connect.execute('SELECT * FROM `users`')
        return users[0]
    }

    async infoByToken(refreshToken){
        const connect = await connection
        const suspect = tokenService.validateRefreshToken(refreshToken)
        console.log(suspect);
        if(suspect === null) {
            throw ApiError.BadRequest('Некорректный токен')
        }

        const [rows, fields] = await connect.execute('SELECT * FROM `users` (`email`, `fio`, `phone_number`, `reg_time`) WHERE `email` = ?', [suspect.email]);
        const user = rows[0]

        if(user === false) {
            throw ApiError.BadRequest('Пользователя не существует')
        }
        return user
    }

    //MUNICIPAL

    async regMunicipalServices(cod, password, name, specification, work_area, email) {
        const connect = await connection
        const [rows1, fields1] = await connect.execute('SELECT * FROM `municipal_services` WHERE `cod` = ?', [cod]);
        const [rows2, fields2] = await connect.execute('SELECT * FROM `municipal_services` WHERE `email` = ?', [email]);
        if(rows1[0]) {
            throw ApiError.BadRequest(`Муниципальная служба с кодом ${cod} уже существует`)
        }else if(rows2[0]) {
            throw ApiError.BadRequest(`Муниципальная служба с почтой ${email} уже существует`)
        }else{
            const hashPassword = await bcrypt.hash(password, 3)
            const dateNow = new Date()
            const date = `${dateNow.getFullYear()}-${dateNow.getMonth()+1}-${dateNow.getDate()} ${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`
            await connect.execute("INSERT INTO `municipal_services`(`cod`, `password`, `name`, `specification`, `work_area`, `email`, `reg_time`) VALUES(?,?,?,?,?,?,?)", [cod, hashPassword, name, specification, work_area, email, date])
            const user = await connect.execute('SELECT * FROM `municipal_services` WHERE `cod` = ?', [cod]);
    
            const municipalServicesDto = new MunicipalServicesDto(user[0][0]) // id, email, isActivated
            const tokens = tokenService.generateTokens({...municipalServicesDto})
            await tokenService.saveToken(null, tokens.refreshToken, municipalServicesDto.id)
    
            return {...tokens, user: municipalServicesDto}
        }
    }

    async loginMunicipalServices(cod, password) {
        const connect = await connection
        const [rows, fields] = await connect.execute('SELECT * FROM `municipal_services` WHERE `cod` = ?', [cod]);
        console.log(rows);

        if(!rows[0]) {
            throw ApiError.BadRequest(`Муниципальная служба c кодом ${cod} не найден`)
        }
        const isPassEquals = await bcrypt.compare(password, rows[0].password)
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль')
        }
        const municipalServicesDto = new MunicipalServicesDto(rows[0])
        const tokens = tokenService.generateTokens({...municipalServicesDto})
        await tokenService.saveToken(null, tokens.refreshToken, municipalServicesDto.id)
        return {...tokens, user: municipalServicesDto}
    }


    async refreshMunicipal(refreshToken) {
        if(!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)

        if(!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }

        const connect = await connection
        const user = await connect.execute('SELECT * FROM `municipal_services` WHERE `id` = ?', [tokenFromDb[0].user]); // user

        const municipalServicesDto = new municipalServicesDto(user[0][0])
        const tokens = tokenService.generateTokens({...municipalServicesDto})
        await tokenService.saveToken(null, tokens.refreshToken, municipalServicesDto.id)
        return {...tokens, user: municipalServicesDto}
    }

    async getAllMunicipal() {
        const connect = await connection

        const municipal = await connect.execute('SELECT * FROM `municipal_services`')
        return municipal[0]
    }

   
}

module.exports = new UserService()