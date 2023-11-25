const jwt = require('jsonwebtoken')
const connection = require('../database/db')

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn:'30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn:'30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try{
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
            return userData
        } catch(e) {
            return null
        }
    }

    validateRefreshToken(token) {
        try{
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
            return userData
        } catch(e) {
            return null
        }
    }

    async saveToken(userId, refreshToken, municipalId) {
        const connect = await connection

        if(userId != null) {
            const [rows, fields] = await connect.execute('SELECT * FROM refresh WHERE user = ?', [userId]); // tokenData
            if(rows[0]) {
                rows[0].refreshToken = refreshToken
                console.log(rows[0]);
    
                return connect.execute(`UPDATE refresh SET refreshToken = ? WHERE user = ${userId}`, [rows[0].refreshToken])
            }
            return connect.execute(`INSERT INTO refresh(user, refreshToken) VALUES (?,?)`, [userId, refreshToken])
        }

        if(municipalId != null) {
            const [rows, fields] = await connect.execute('SELECT * FROM refresh WHERE municipal_id = ?', [municipalId]); // tokenData
            if(rows[0]) {
                rows[0].refreshToken = refreshToken
                console.log(rows[0]);
    
                return connect.execute(`UPDATE refresh SET refreshToken = ? WHERE user = ${municipalId}`, [rows[0].refreshToken])
            }
            return connect.execute(`INSERT INTO refresh(municipal_id, refreshToken) VALUES (?,?)`, [municipalId, refreshToken])
        }
    }

    async removeToken(refreshToken) {
        const connect = await connection
        const tokenData = await connect.execute(`DELETE FROM refresh WHERE refreshToken = ?`, [refreshToken])
        return tokenData
    }

    async findToken(refreshToken) {
        const connect = await connection
        const tokenData = await connect.execute(`SELECT * FROM refresh WHERE refreshToken = ?`, [refreshToken])
        return tokenData[0]
    }
}

module.exports = new TokenService()