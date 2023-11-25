const newService = require('../service/newsService')

class NewsController {
    async getNews(req, res, next) {
        try {
          const news = await newService.getAllNews()
          return res.json(news)
        } catch (e) {
          next(e)
        }
      }
}

module.exports = new NewsController()
