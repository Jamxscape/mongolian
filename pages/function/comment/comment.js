// pages/myLike/myLike.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    like: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  bindItemTap: function(e) {
    wx.navigateTo({
      url: "../comment1/comment1"
    })
  },
  like: function(e) {
    var that = this;
    var word="已";
    this.setData({ 
      good_num: that.data.like + 1,
      goodW: word,
      });
  }
  
  
})