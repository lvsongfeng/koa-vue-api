import axios from 'axios'

export let Get = (ctx) => {

  ctx.body = {
    result: 'get',
    name: ctx.params.age,
    para: ctx.query
  }
}
export let Add = async (ctx) => {
  let num = ctx.params.num
  let data = ''
    let res = await axios({
      method:'get',
      url:'https://news-at.zhihu.com/api/4/news/latest',
      data:{}
  })
  ctx.response.body = {
    code: 200,
    message: '请求成功',
    data: res.data,
  }
}
export let Post = async (ctx) => {
  ctx.body = {
    result: 'post',
    name: ctx.params.name,
    para: ctx.request.body
  }
}

export let Put = (ctx) => {
  ctx.body = {
    result: 'put',
    name: ctx.params.name,
    para: ctx.request.body
  }
}

export let Delect = (ctx) => {
  ctx.body = {
    result: 'delect',
    name: ctx.params.name,
    para: ctx.request.body
  }
}
