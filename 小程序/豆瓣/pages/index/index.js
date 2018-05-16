//index.js
//获取数据接口
var API_URL = 'http://t.yushu.im/v2/movie/top250'


Page({
  data: {
    title:"加载中...",
    movies:[] 
  },
  onLoad:function(){
    wx.showToast({
      title: '加载中...',
      icon:'loading',
      duration:1000
    });
    var that = this;
    wx.request({
      url: API_URL,
      data:{},
      header:{
        'content-type': 'application/json'
      },
      success:function(res){
        wx.hideToast();
        var data = res.data;
        that.setData({
          title:"豆瓣Top250",
          movies: data.subjects
        });
        console.log(res.data);
      }
    })
    
  }
})
