var app = getApp()

Page({
  data: {
    movies: [
      { url: '../../images/indexlunbo.png' },
      { url: '../../images/indexlunbo2.png'}
    ],
    items: [],
    slides: [],
    orderItems: [
      {
        typeId: 0,
        name: '拍照翻译',
        name1: 'ᠰᠡᠭᠦᠳᠡᠷᠯᠡᠨ ᠣᠷᠴᠢᠭᠣᠯᠬᠣ ',
        imageurl: '../../images/translate.png',
      },
      {
        typeId: 1,
        name:'语音翻译',
        name1: 'ᠠᠪᠢᠶᠠᠯᠠᠨ ᠣᠷᠴᠢᠭᠣᠯᠬᠣ',
        imageurl: '../../images/a2.png',
      },
      {
        typeId: 2,
        name:'百科知识',
        name1: 'ᠬᠣᠷᠢᠶᠠᠩᠭᠣᠢ ᠮᠡᠳᠡᠯᠭᠡ ',
        imageurl: '../../images/a3.png'
      },
      {
        typeId: 3,
        name:'每日打卡',
        name1: 'ᠡᠳᠣᠷ ᠲᠣ ᠨᠢᠭᠡ ᠲᠡᠮᠲᠡᠭᠯᠡᠬᠦ',
        imageurl: '../../images/a4.png'
      }
    ],
    orderItems2: [
      {
        typeId: 5,
        name: '我要发帖',
        name1:'ᠳᠡᠪᠰᠢᠭᠦᠯᠭᠦ',
        imageurl: '../../images/b1.png',
      },
      {
        typeId: 6,
        name: '我要回答',
        name1: 'ᠬᠠᠷᠢᠭᠣᠯᠣᠨ᠎ᠠ',
        imageurl: '../../images/b2.png',
      },
      {
        typeId: 7,
        name: '我要提问',
        name1:'ᠠᠰᠠᠭᠣᠨ᠎ᠠ',
        imageurl: '../../images/b3.png'
      },
      {
        typeId: 8,
        name: '我的收藏',
        name1:'ᠬᠠᠳᠠᠭᠠᠯᠠᠬᠣ',
        imageurl: '../../images/b4.png'
      },
      {
        typeId: 9,
        name: '我的消息',
        name1:' ᠴᠢᠮᠡᠭᠡ',
        imageurl: '../../images/b5.png'
      }
    ],
    teachItems: [
      {
        teachId: 1,
        name: '热话题——有关成吉思汗养生之道的传说',
        imageurl: '../../images/ch1.png',
      },
      {
        teachId: 2,
        name: '热话题——蒙古族并不是蒙族',
        imageurl: '../../images/ch2.png',
      } 
    ],
    teachItems2: [
      {
        teachId: 3,
        name: '一问一答——中国的蒙古族是如何看待外蒙古国的？',
        imageurl: '../../images/m4.png',
      },
      {
        teachId: 4,
        name: '一问一答——现在中国的所谓蒙古族，超过一半都是假蒙族？',
        imageurl: '../../images/m5.png',
      },
      {
        teachId: 5,
        name: '一问一答——蒙语 分布区 有多少种方言？不同方言区的人交谈，能听懂对方的话吗？',
        imageurl: '../../images/m6.png',
      }
    ],
    teachItems3: [
      {
        teachId: 6,
        name: '精华帖——社会主义核心价值观（完整整理版）',
        imageurl: '../../images/m7.png',
      },
      {
        teachId: 7,
        name: '精华——当代蒙古人是古代匈奴人的后代？他们是怎么来的？',
        imageurl: '../../images/m8.png',
      },
      {
        teachId: 8,
        name: '精华——当代蒙古人是古代匈奴人的后代？他们是怎么来的？',
        imageurl: '../../images/m9.png',
      }
    ],
    orderItems3: [
      {
        id: 12,
        name: '热话题',
        name1:'ᠬᠠᠯᠠᠮᠰᠢᠯ ᠮᠡᠳᠡᠭᠡ'
      },
      {
        id: 13,
        name: '你问我答',
        name1:' ᠠᠰᠠᠭᠣᠨ ᠬᠠᠷᠢᠭᠣᠯᠬᠣ'
      },
      {
        id: 14,
        name: '精华内容',
        name1:'ᠰᠢᠯᠢᠳᠡᠭ ᠠᠭᠣᠯᠭ᠎ᠠ'
      }
    ],
    tempitems:[
        {
        teachId: 1,
        name: '热话题——有关成吉思汗养生之道的传说',
        imageurl: '../../images/ch1.png',
      },
      {
        teachId: 2,
        name: '热话题——蒙古族并不是蒙族',
        imageurl: '../../images/ch2.png',
      }
    ],
    id:0
  },
  toOrder2: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.teachid;
    if(id==1)
      wx.navigateTo({
        url: "../chengjisihan/chengjisihan"
      })
  },
  superPage: function(e){
    var that = this;
    var id = 0;
     id=e.currentTarget.dataset.id;
    var temp;
    if(id==12){
      temp=this.data.teachItems;
    }
    else if(id==13){
      temp = this.data.teachItems2;
    }
    else if (id == 14) {
      temp = this.data.teachItems3;
    }
    this.setData({
      tempitems: temp,
      id: id
    });
  },
  toOrder:  function (e) {
    var that = this;
    var id = e.currentTarget.dataset.typeid;
    if(id==0)
    wx.navigateTo({
      url: "../function/regWord/regWord"
    })
    else if(id == 1)
      wx.navigateTo({
        url: "../function/translate/translate"
      })
    else if (id == 2)
      wx.navigateTo({
       url:  "../function/myLike/myLike"
      })
    else if(id == 3)
      wx.navigateTo({
       url: "../function/daily/daily"
      })
    else if (id == 5)
      wx.navigateTo({
        url: "../function/comment/comment2"
      })
    else if (id == 7)
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
  }
  

  
})
