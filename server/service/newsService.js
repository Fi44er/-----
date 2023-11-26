const connection = require('../database/db')
// const UserDto = require('../dtos/userDto')

class NewsService {
    async getAllNews() {
        const connect = await connection

        const users = await connect.execute('SELECT * FROM `news`')
        return users[0]
    }

    async addNews(heading, text) {
        const connect = await connection
        await connect.execute("INSERT INTO `news`(`heading`, `text`) VALUES(?,?)", [heading, text])
    }

    async delNews(id) {
        const connect = await connection
        await connect.execute("DELETE FROM `news` WHERE `id` = ?", [id])
    }

    // async registration(email, password, fio, phoneNumber, address) {
    //     const connect = await connection
    //     const [rows, fields] = await connect.execute('SELECT * FROM `users` WHERE `email` = ?', [email]);
    //     if(rows[0]) {
    //         throw ApiError.BadRequest(`Пользователь с почтой ${email} уже существует`)
    //     }else{
    //         const hashPassword = await bcrypt.hash(password, 3)
    //         const dateNow = new Date()
    //         const date = `${dateNow.getFullYear()}-${dateNow.getMonth()+1}-${dateNow.getDate()} ${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`
    //         await connect.execute("INSERT INTO `users`(`email`, `password`, `fio`, `phone_number`, `address`, `reg_time`) VALUES(?,?,?,?,?,?)", [email, hashPassword, fio, phoneNumber,address ,date])
    //         const user = await connect.execute('SELECT * FROM `users` WHERE `email` = ?', [email]);
    
    //         const userDto = new UserDto(user[0][0]) // id, email, isActivated
    //         const tokens = tokenService.generateTokens({...userDto})
    //         await tokenService.saveToken(userDto.id, tokens.refreshToken, null)
    
    //         return {...tokens, user: userDto}
    //     }
    // }
}

module.exports = new NewsService()