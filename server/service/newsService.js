const connection = require('../database/db')
// const UserDto = require('../dtos/userDto')

class NewsService {
    async getAllNews() {
        const connect = await connection

        const users = await connect.execute('SELECT * FROM `news`')
        return users[0]
    }
}

module.exports = new NewsService()