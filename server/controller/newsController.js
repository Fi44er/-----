// const newService = require('../service/newsService')
const newsService = require('../service/newsService')

class NewsController {
    async getNews(req, res, next) {
        try {
          const news = await newsService.getAllNews()
          return res.json(news)
        } catch (e) {
          next(e)
        }
      }

      async addNews(req, res, next) {
        try {
          const { heading, text } = req.body
          const news = await newsService.addNews(heading, text)
          return res.json(news)
        } catch (e) {
          next(e)
        }
      }

      async delNews(req, res, next) {
        try {
          const { id } = req.body
          const news = await newsService.delNews(id)
          return res.json(news)
        } catch (e) {
          next(e)
        }
      }
}

module.exports = new NewsController()
