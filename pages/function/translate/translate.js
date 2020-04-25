// pages/function/在线翻译/translate.js
// pages/myLike/regWord.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function (options) {
  const requestTask = wx.request({
    url: 'https://mengguyu.top/index.html', //仅为示例，并非真实的接口地址
    data: {
      x: '',
      y: ''
    },
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      console.log(res.data)
    }
  })
  }
})
