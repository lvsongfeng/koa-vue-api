import axios from 'axios'

export let GetNews = async (ctx) => {
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