// pages/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: "",
    latitude: "",

    markers: [{
      id: "1",
      latitude: 121.527323,
      longitude: 38.859464,
      width: 50,
      height: 50,
     
    }],
    circles: [{
      latitude: 121.527323,
      longitude: 38.859464,
      color: '#FF0000DD',
      fillColor: '#7cb5ec88',
      radius: 3000,
      strokeWidth: 1
    }]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        this.latitude= res.latitude
        this.longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})