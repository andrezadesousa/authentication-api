const Koa = require('koa')
const Router = require('koa-router')
const applyRoutes = require('./routes')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

const app = new Koa()
const router = new Router()

module.exports = () => {
    console.log('[Koa] Creating a new server')

    applyRoutes(router)

    app.use(cors()).use(bodyParser()).use(router.routes()).use(router.allowedMethods())
    
    //porta na maquina
    app.listen(8080)    
}