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
    console.log('请求知科信息列表')
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
    console.log('haha'+res)
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