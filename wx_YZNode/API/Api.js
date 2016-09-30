const API_URL = 'https://cnodejs.org/api/v1'

function fetchApi (type, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${API_URL}/${type}`,
      data: Object.assign({}, params),
      header: { 'Content-Type': 'application/json' },
      success: resolve,
      fail: reject
    })
  })
}

module.exports = {
    fetchHomePageData () {
        return fetchApi("topics")
            .then(res => res.data)
    },
    fetchDetailPage (id) {
        return fetchApi("topic/"+id)
            .then(res => res.data)
    }
}