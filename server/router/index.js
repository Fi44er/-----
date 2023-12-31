const Router = require('express').Router
const UserController = require('../controller/userController')
const {body} = require('express-validator')
const middlewaresAuth = require('../middlewares/middlewaresAuth')
const NewsController = require('../controller/newsController')


const router = new Router()

// user
router.post('/registration', 
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    UserController.registration)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.get('/refresh', UserController.refresh)
router.get('/users', UserController.getUsers)
router.get('/getUser', UserController.findUser)

// municipal
router.post('/regMunicipalServices', UserController.regMunicipalServices)
router.post('/loginMunicipalServices', UserController.loginMunicipalServices)
router.get('/getMunicipal', UserController.getMunicipal)

// news
router.get('/news', NewsController.getNews)
router.post('/addnews', NewsController.addNews)
router.post('/delnews', NewsController.delNews)

module.exports = router