import KoaRouter from 'koa-router'
import controllers from '../controllers/index.js'

const router = new KoaRouter()

router
  .get('/public/get', function (ctx, next) {
    ctx.body = '禁止访问！'
  }) // 以/public开头则不用经过权限认证
  .all('/upload', controllers.upload.default)
  .get('/api/:name/:age', controllers.api.Get)
  .post('/api/:name', controllers.api.Post)
  .put('/api/:name', controllers.api.Put)
  .del('/api/:name', controllers.api.Delect)
  .post('/auth/:action', controllers.auth.Post)
  // 知乎获取最近新闻
  router.get('/favicon.ico', (ctx) => {
    console.log('请求图标了')
  })
   router.get('/zhihu/latest', controllers.zhihu.GetNews)
   router.get('/zhihu/detail/:id', controllers.zhihu.GetNewsDetail)
   router.post('/zhihu/login', controllers.zhihu.userLogin)
module.exports = router
