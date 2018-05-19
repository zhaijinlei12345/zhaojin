// pages/search/search.js
var API_URL = 'http://t.yushu.im/v2/movie/search';  
Page({

  /**
   * 页面的初始数据
   */
  data: {
     movies:[],
     
  },
  search:function(e){
   if(!e.detail.value){
     return;
   }
   wx.showToast({
     title: '加载中...',
     icon:'loading',
     duration:1000
   }) ;
   var that = this;
   wx.request({
     url: API_URL + "?q=" + e.detail.value,
     //url: API_URL + "?q=" ,
  
     data:{},
     header: {
       'content-type': 'application/json'
     },
     success:function(res){
       wx.hideToast();
       var data = res.data;
       console.log(data.count);
       if(data.count==0){
         wx.showModal({
           title: '提醒',
           content: '没找到该影片（请根据片名进行搜索）',
           confirmColor: 'skyblue',
           confirmText: '好的',
           success: function (res) {
             if (res.confirm) {
               console.log("确定");
             } else if (res.cancel) {
               console.log("取消");
             }
           }
         })
       }
       that.setData({
         movies: data.subjects
       });
       console.log(res.data);
     }
     
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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