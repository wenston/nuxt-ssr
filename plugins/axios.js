import qs from 'qs'

export default function(ctx, inject) {
  const { $axios } = ctx
  $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded')
  $axios.onRequest(config => {
    config.method = 'POST'
    //如果已经有了token，则获取到token
    // const token = config.headers.common.Authorization
    // if (token) {
    //   config.data.token = token
    // }
    config.data = qs.stringify(config.data)
    return config
  })
  $axios.onResponse(res => {
    const { data } = res
    if (data.ResponseID === 0) {
      return data.Data
    }
  })
}
