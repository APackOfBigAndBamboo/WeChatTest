// pages/deliveryinput/deliveryinput.js
Page({
  data: {
    img: '../../images/qwe.jpg',
    title: "快递查询",
    areaIndex: 0,
    area: ['点击选择', '申通', 'EMS', '顺丰', '圆通', '中通', '韵达', '天天', '汇通', '全峰', '德邦', '宅急送'],
    realvalue: ['', 'shentong', 'ems', 'shunfeng', 'yuantong', 'zhongtong', 'yunda', 'tiantian', 'huitongkuaidi', 'quanfengkuaidi', 'debangwuliu', 'zhaijisong']
  },
  //获取快递公司
  bindPickerChange: function (e) {
    //console.log(this.data.realvalue[e.detail.value])
    this.setData({
      userName: this.data.realvalue[e.detail.value],
      areaIndex: e.detail.value
    })
  },

  //获取快递单号
  passWdInput: function (e) {
    this.setData({
      userPwd: e.detail.value
    })
  },
  // 用户点击右上角分享
  onShareAppMessage: function () {

  }
})