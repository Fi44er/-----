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

}

module.exports = new NewsService()