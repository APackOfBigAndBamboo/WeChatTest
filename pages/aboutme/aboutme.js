// pages/aboutme/aboutme.js

//获取应用实例
const app = getApp()

Page({
  data: {
    img: '../../images/qwe.jpg',
    title: "马什么梅",
    intro: " 热爱编程，有实战项目经历，熟练掌握Java开发专业知识,有良好的沟通表达能力、理解能力及逻辑思维，能快速学习,有团队精神和集体荣誉感，能快速融入团队",
    connecttion: "联系方式",
    address:"地址：河南省宁陵县张弓镇黄庄村",
    phone:"联系电话：17611399805",
    email:"邮箱：1084150741@qq.com"
     },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
})
