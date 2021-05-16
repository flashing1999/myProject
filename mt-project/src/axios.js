import axios from 'axios'

axios.defaults.baseURL = 'https://open.duyiedu.com'

axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: 'water_1569707882949'
  }
  return config
}, function (error) {
  // 对请求错误做些什么return
  Promise.reject(error)
})
axios.interceptors.response.use((config) => {
  if (config.config.url === '/api/meituan/login' || config.config.url === '/api/meituan/register') {
    return config
  } else {
    return config.data.data
  }
})

const api = {
  getHotList: axios.get('/api/meituan/header/searchHotWords.json'),
  getSearchList: axios.get('/api/meituan/header/search.json'),
  getStyleList: axios.get('/api/meituan/index/resultsByKeywords.json'),
  getCityList: axios.get('/api/meituan/city/cityList.json'),
  getHotCity: axios.get('/api/meituan/city/hot.json'),
  getProvince: axios.get('/api/meituan/city/province.json'),
  getRecentCity: axios.get('/api/meituan/city/recents.json'),
  getProductList: axios.get('/api/meituan/list/goodsList.json'),
  getFenleiList: axios.get('/api/meituan/list/classify.json'),
  getAreaList: axios.get('/api/meituan/list/areaList.json'),
  getLikeList: axios.get('/api/meituan/list/recommend.json'),
  register (config) {
    return axios.get('/api/meituan/register', config)
  }
}

export default api
