// pages/two/two.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '风的季节',
    author: 'Soler',
    src: "http://sc1.111ttt.cn:8282/2016/1/08m/21/201212117350.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3",
    imgSrc: "../../img/0.jpg",
    img: ['scaleToFill', 'aspectFit', 'aspectFill', 'top', 'bottom', 'center', 'left', 'right', 'top left', 'top right', 'bottom left', 'bottom right',],
    danmu: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }],
    
  },
   

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
 
  },
  audioplay: function () {
    this.audioCtx.play()
  },
  audiopause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    this.audioCtx = wx.createAudioContext('audio');
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