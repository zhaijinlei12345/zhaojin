var app=getApp();

// pages/test/test.js
Page({
    
  /**
   * 页面的初始数据
   */
  data: {
     name:"刘波",
     testuser:'ssr'
  },
   
  handleTap1:function(event){
    console.log(event);
    console.log("父");
  },
  handleTap2: function(event){
    console.log(event);
    console.log("子");
  },
  handleTap3: function(event){
    console.log(event);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      testuser: app.globalData.testuser,
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