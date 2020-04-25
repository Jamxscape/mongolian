var app = getApp()

Page({
  data: {
    movies: [
      { url: '../../images/l1.png' },
      { url: '../../images/l2.png' }
    ],
    items: [],
    slides: [],
    orderItems: [
      {
        typeId: 0,
        imageurl: '../../images/A1a.png',
        name:"翻译工具",
        name1:'ᠣᠷᠴᠢᠭᠣᠯᠬᠣ ᠪᠠᠭᠠᠵᠢ'
      },
      {
        typeId: 1,
        imageurl: '../../images/A2a.png',
        name: "真人对话",
        name1:'ᠦᠨᠡᠨ ᠬᠦᠮᠦᠨ ᠤ ᠬᠠᠷᠢᠯᠴᠠᠭ᠎ᠠ'
      },
      {
        typeId: 2,
        imageurl: '../../images/A4a.png',
        name: "学习脚印",
        name1:'ᠰᠣᠷᠣᠯᠴᠠᠭᠰᠠᠨ ᠲᠡᠮᠲᠡᠭᠯᠡᠯ'
      }
    ],
    orderItems2: [
      {
        typeId: 0,
        imageurl: '../../images/B1a.png',
      },
      {
        typeId: 1,
        imageurl: '../../images/B2b.png',
      },
    ],
    teachItems: [
      {
        teachId: 0,
        name: '趣味测验',
        name1:'ᠰᠢᠯᠭᠠᠨ ᠪᠠᠶᠢᠴᠠᠭᠠᠯᠲᠠ',
        imageurl: '../../images/C1a.png',
      },
      {
        teachId: 1,
        name: '趣味问答',
        name1:'ᠠᠰᠠᠭᠣᠨ ᠬᠠᠷᠢᠭᠣᠯᠬᠣ',
        imageurl: '../../images/C1b.png',
      },
      {
        teachId: 2,
        name: '常见词汇',
        name1: 'ᠦᠭᠡᠰ ᠤᠨ ᠰᠠᠩ',
        imageurl: '../../images/C1c.png',
      },
    ],
    teachItems2: [
      {
        teachId: 3,
        name: '日常用语',
        name1:'ᠡᠳᠣᠷ ᠳᠣᠲᠣᠮ ᠤᠨ ᠦᠭᠡ  ᠬᠡᠯᠡ',
        imageurl: '../../images/C2a.png',
      },
      {
        teachId: 4,
        name: '教学课程',
        name1:'ᠵᠢᠭᠠᠨ ᠰᠣᠷᠭᠠᠬᠤ ᠬᠢᠴᠢᠶᠡᠯ',
        imageurl: '../../images/C2b.png',
      },
      {
        teachId: 5,
        name: '谚语故事',
        name1:'ᠵᠤᠶᠢᠷ ᠦᠭᠡ',
        imageurl: '../../images/C2c.png',
      },
    ]
  },
  comment: function (e) {
    wx.navigateTo({
      url: "../function/comment/comment"
    })
  },
  onShareAppMessage: function () {
    return {
      title: "学习",
      desc: "首页",
      path: `pages/index/index`
    }
  },//分享页面
  nextLoad: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 4000
    })
    var next = util.getNext();
    console.log("continueload");
    var next_data = next.data;
    this.setData({
      feed: this.data.feed.concat(next_data),
      feed_length: this.data.feed_length + next_data.length
    });
    setTimeout(function () {
      wx.showToast({
        title: '加载成功',
        icon: 'success',
        duration: 2000
      })
    }, 3000)
  },
toOrder: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.teachid;
    if (id == 0)
      wx.navigateTo({
        url: "../funTest/funTest"
      })
    else if (id == 4)
      wx.navigateTo({
        url: "../function/teach/teach"
      })
    else if (id == 2)
      wx.navigateTo({
        url: "../function/translate/translate"
      })
    else if (id == 3)
      wx.navigateTo({
        url: "../function/myLike/myLike"
      })
    else if (id == 5)
      wx.navigateTo({
        url: "../yanyu/yanyu"
      })
    else if (id == 1)
      wx.navigateTo({
        url: "../game/game"
      })
  }

})