// pages/function/commnet1/comment1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    like: 0,
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