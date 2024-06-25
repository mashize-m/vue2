import axios from 'axios'
// import qs from 'qs'
import dayjs from 'dayjs'
// const config = serverConfig.system
// 取消请求
let cancel = null

const baseURL = process.env.NODE_ENV === 'development' ? '' : config.baseUrl.pro

const routerSkip = () => {
  cancel('取消请求') // 取消请求
  const timer = setInterval(() => {
    window.localStorage.clear()
    window.location.reload()
    window.location.href = '/'
    clearInterval(timer)
  }, 1000)
}

const instance = axios.create({
  // 创建axios实例，在这里可以设置请求的默认配置
  baseURL,
  headers: {},
  timeout: 200000, // 设置超时时间
  withCredentials: true, // 允许跨域携带cookie
  // transformRequest: [(params) => qs.stringify(params)], // 默认改成formdata
  cancelToken: new axios.CancelToken(function executor (c) {
    // 取消请求
    cancel = c
  })
})

// request
instance.interceptors.request.use(
  config => {
    // 非登录登录接口
    if (config.isToken) {
      const tokenTime = localStorage.getItem('tokenTime')
      // 请求前判断token是否过期
      const currentTime = dayjs().format('YYYY-MM-DD hh:mm:ss')
      const diff = dayjs(tokenTime).diff(currentTime, 'second')
      // console.log(diff)
      if (diff > config.tokenInvalidTime) {
        // message.warning('登录已失效，请您重新登陆')
        routerSkip()
      }
    }
    config.headers['X-Gisq-Token'] = localStorage.getItem('X-Gisq-Token') || ''
    config.headers.userId = localStorage.getItem('userId') || ''
    config.headers.userName = encodeURI(localStorage.getItem('username')) || ''
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// response
instance.interceptors.response.use(
  ({ data }) => {
    return data
  },
  error => {
    return Promise.reject(error)
  }
)

/* 统一封装get请求 */
export const get = (url, params, config = { isToken: false }) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url,
      params,
      ...config
    })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/* 统一封装post请求  */
export const post = (url, data, config = { isToken: false }) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'post',
      url,
      data,
      ...config
    })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        // if (axios.isCancel(error)) {
        //   console.log('取消请求error', error)
        // } else {
        //   console.log(error)
        // }
        reject(error)
      })
  })
}
