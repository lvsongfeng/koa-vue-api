import axios from 'axios'
let util = require("util")
export let GetNews = async (ctx) => {
  try {
    let res = await axios({
      method: 'get',
      url: 'https://news-at.zhihu.com/api/4/news/latest',
      data: {}
    })
    ctx.response.body = {
      code: 200,
      message: '请求成功',
      data: res.data
    }
    console.log('请求知乎信息列表')
  } catch (err) {
    ctx.response.body = {
      code: 500,
      message: '列表请求失败',
      data: err
    }
  }
}

export let GetNewsDetail = async (ctx) => {
  try {
    let id = ctx.params.id
    let res = await axios({
      method: 'get',
      url: `https://news-at.zhihu.com/api/4/news/${id}`,
    })
    ctx.response.body = {
      code: 200,
      message: '请求新闻详情成功',
      data: res.data
    }
  } catch (err) {
    ctx.response.body = {
      code: 500,
      message: '详情请求失败',
      data: err
    }
  }
}

export let userLogin = async (ctx) => {
  let params = ctx.request.body.params
  ctx.cookies.set(
    'cid', 
    'hello world',
    {
      domain: 'localhost',  // 写cookie所在的域名
      path: '/',       // 写cookie所在的路径
      maxAge: 100000 * 60 * 1000, // cookie有效时长
      expires: new Date('2019-02-15'),  // cookie失效时间
      httpOnly: false,  // 是否只用于http请求中获取
      overwrite: false  // 是否允许重写
    }
  )
  ctx.response.body = {
    code: 200,
    message: '登录成功',
    data: params,
  }
  ctx.logger.info(ctx.request.headers)
  ctx.logger.info('登录请求成功 hahaha')
}