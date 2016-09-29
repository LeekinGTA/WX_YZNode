const API_URL = 'https://cnodejs.org/api/v1/topics'

function fetchApi (type, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${API_URL}`,
      data: Object.assign({}, params),
      header: { 'Content-Type': 'application/json' },
      success: resolve,
      fail: reject
    })
  })
}

module.exports = {
    fetchHomePageData () {
        return fetchApi()
            .then(res => res.data)
    }
}