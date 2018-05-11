// pages/module/module.js
var order = ["a","b","c"];
var index = 0;
var Num=0;
var api = "http://t.yushu.im/v2/movie/top250";
Page({
   /**
   * 页面的初始数据
   */
 
  data: {
     toView:"a",
     img:[
       'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
       'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
       'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
     ],
     iocns:[
       "success", "success_no_circle", "info", "warn", "waiting", "cancel", "download", "search", "clear"
     ],
     inter:"1000",
     auto:true,
     progress: "0",
     country: [
       { name: 'USA', value: '美国' },
       { name: 'CHN', value: '中国', checked: 'true' },
       { name: 'BRA', value: '巴西' },
       { name: 'JPN', value: '日本' },
       { name: 'ENG', value: '英国' },
       { name: 'TUR', value: '法国' },
     ],
     city:["北京","上海","广州","深圳","杭州"],
     index:"0",
     time:"09:01",
     date: "1990-09-01",
     key:true
     
  },
  text:function(e){
    console.log(e);
  },
  changedate: function (e) {
    this.setData({
      date: e.detail.value
    })

  },
  changeswitch:function(e){
    this.setData({
      key: !this.data.key
    });
  },
  changetime:function(e){
    this.setData({
      time: e.detail.value
    })
  },
  changekey:function(){
    this.setData({
      key:!this.data.key
    });
  },
  changerange:function(e){
    this.setData({
      index: e.detail.value
    })
    
  },
  changeradio: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  changecheckbox: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  interval:function(e){
     this.setData({
       inter: e.detail.value
     })
  },
  showaction:function(){
    wx.showActionSheet({
      itemList: ['a','b','c'],
      success :function(res){
        if(!res.cancel){
          console.log(res.tapIndex)
        }
      }
    })
  },
  showmodel:function(){
    wx.showModal({
      title: '题目',
      content: '这是个弹窗',
      confirmColor:'skyblue',
      confirmText:'选择',
      success:function(res){
        if(res.confirm){
          console.log("确定");
        } else if (res.cancel){
             console.log("取消");
        }
      }
    })
  },
  wren:function(){
        wx.showToast({
          title: '提示',
          icon :'loading',
          duration:10000,
          success: function () {  
              console.log("确定");
          }

        })
        wx.request({
          url: api, //仅为示例，并非真实的接口地址
          data: {},
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            console.log(res.data)
            wx.hideToast();
          }
        })
  },
  sub: function (e) {
    console.log(e.detail.value);
  },
  changeauto:function(){
    this.setData({
      auto:!this.data.auto
    })
  },
  scrolltoupper:function(){
   console.log("TOP触发")
  },
  scrolltolower:function(){
    console.log("触发了bottom")
  },
  scroll:function(){
    console.log("滚动了");
  },
  tapChange:function(){
    index++;
    if(index==order.length)
    {
      index=0;
    }
    this.setData({
      toView:order[index]
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
          var that=this;
         var timer =setInterval(function(){
          Num++;
          if(Num>=100){
            clearInterval(timer)
          }
          that.setData({
            progress:Num
          });
         },30)
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