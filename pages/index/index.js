//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    contexts: "ss",
    toastHidden: true
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  toastChange: function () {
    this.setData({
      toastHidden: true
    })
  },
  onLoad: function (options) {
    wx.getNetworkType({
      success: function (res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        var networkType = res.networkType
       // console.log(networkType)
      }
    })
    var that = this
    wx.request({
      url: 'http://www.kuaidi100.com/query', //仅为示例，并非真实的接口地址
      data: {
        type: options.type,
        postid: options.postid
        // type: 'shentong',
        // postid: '3343536723533'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.message=='参数错误') {
          that.setData({
            toastHidden: false
          })
        }
       // console.log(res.data.message)
        that.setData({
          contexts: res.data.data
        })
      }
    })
  },

})
//3343536723533