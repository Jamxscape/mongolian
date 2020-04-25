var app = getApp()

Page({
  data: {
    movies: [
      { url: '../../images/j1.png' },
      { url: '../../images/j2.png' }
    ],
    items: [],
    slides: [],
    orderItems: [
      {
        id: 0,
        name: '百科知识',
        name1: 'ᠬᠣᠷᠢᠶᠠᠩᠭᠣᠢ ᠮᠡᠳᠡᠯᠭᠡ '
      },
      {
        id: 1,
        name: '做客内蒙',
         name1: 'ᠦᠪᠦᠷ ᠮᠣᠩᠭᠣᠯ ᠳ᠋ᠥ ᠵᠣᠴᠢᠯᠠᠬᠤ'
      },
      {
        id: 2,
        name: '礼仪习俗',
        name1:'ᠶᠣᠰᠣᠯᠠᠯ ᠳᠠᠳᠬᠠᠯ'
      },
      {
        id: 3,
        name: '文化艺术',
        name1:' ᠰᠣᠶᠣᠯ  ᠣᠷᠠᠯᠢᠭ'
      }
    ],
    tempitems:[
      {
        eid: 0,
        name: '政治',
        name1:'ᠣᠯᠣᠰ ᠲᠦᠷᠦ',
        imageurl: '../../images/z1.png'
      },
      {
        eid: 1,
        name: '经济',
        name1:' ᠠᠵᠤ ᠠᠬᠤᠢ',
        imageurl: '../../images/z2.png'
      },
      {
        eid: 2,
        name: '人口',
        name1: 'ᠬᠦᠮᠦᠨ ᠠᠮᠠ',
        imageurl: '../../images/z3.png'
      },
      {
        eid: 3,
        name: '历史',
        name1: ' ᠲᠡᠣᠬᠡ',
        imageurl: '../../images/z4.png'
      },
      {
        eid: 4,
        name: '地理',
        name1: ' ᠭᠠᠵᠠᠷ ᠵᠦᠢ',
        imageurl: '../../images/z5.png'
      },
      {
        eid: 5,
        name: '数学',
        name1: 'ᠲᠣᠭᠠᠨ ᠤ ᠣᠬᠠᠭᠠᠨ',
        imageurl: '../../images/z8.png'
      },
      {
        eid: 6,
        name: '蒙医',
        name1: 'ᠮᠣᠩᠭᠣᠯ ᠡᠮᠨᠡᠯ',
        imageurl: '../../images/z7.png'
      },
      {
        eid: 7,
        name: '哲学',
        name1: ' ᠭᠦᠨ ᠣᠬᠠᠭᠠᠨ',
        imageurl: '../../images/z9.png'

      },
      {
        eid: 8,
        name: '天文历法',
        name1: 'ᠣᠳᠣᠨ ᠣᠷᠣᠨ ᠤ ᠵᠢᠷᠣᠬᠠᠢ',
        imageurl: '../../images/z6.png'
      }
    ],
    id: 0,
    eItems: [
      {
        eid: 0,
        name: '政治',
        name1: 'ᠣᠯᠣᠰ ᠲᠦᠷᠦ',
        imageurl: '../../images/z1.png'
      },
      {
        eid: 1,
        name: '经济',
        name1: ' ᠠᠵᠤ ᠠᠬᠤᠢ',
        imageurl: '../../images/z2.png'
      },
      {
        eid: 2,
        name: '人口',
        name1: 'ᠬᠦᠮᠦᠨ ᠠᠮᠠ',
        imageurl: '../../images/z3.png'
      },
      {
        eid: 3,
        name: '历史',
        name1: ' ᠲᠡᠣᠬᠡ',
        imageurl: '../../images/z4.png'
      },
      {
        eid: 4,
        name: '地理',
        name1: ' ᠭᠠᠵᠠᠷ ᠵᠦᠢ',
        imageurl: '../../images/z5.png'
      },
      {
        eid: 5,
        name: '数学',
        name1: 'ᠲᠣᠭᠠᠨ ᠤ ᠣᠬᠠᠭᠠᠨ',
        imageurl: '../../images/z8.png'
      },
      {
        eid: 6,
        name: '蒙医',
        name1: 'ᠮᠣᠩᠭᠣᠯ ᠡᠮᠨᠡᠯ',
        imageurl: '../../images/z7.png'
      },
      {
        eid: 7,
        name: '哲学',
        name1: ' ᠭᠦᠨ ᠣᠬᠠᠭᠠᠨ',
        imageurl: '../../images/z9.png'

      },
      {
        eid: 8,
        name: '天文历法',
        name1: 'ᠣᠳᠣᠨ ᠣᠷᠣᠨ ᠤ ᠵᠢᠷᠣᠬᠠᠢ',
        imageurl: '../../images/z6.png'
      }
    ],
    eItems2:[//做客内蒙
      {
        eid: 9,
        name: '景点推荐',
        name1:'ᠵᠣᠭᠠᠴᠢᠯ ᠤᠨ ᠣᠷᠣᠨ ᠲᠠᠨᠢᠯᠴᠠᠭᠣᠯᠬᠣ',
        imageurl: '../../images/tu1.png',
      },
      {
        eid: 10,
        name: '特色特产',
        name1:'ᠣᠨᠴᠠ ᠭᠠᠷᠣᠯᠲᠠ',
        imageurl: '../../images/t2.png',
      },
      {
        eid: 11,
        name: '旅游必备',
        name1:' ᠵᠣᠭᠠᠴᠠᠯ ᠤᠨ ᠪᠡᠯᠡᠳᠭᠡᠯ',
        imageurl: '../../images/t3.png'
      }
    ],
    eItems3: [//礼仪习俗
      {
        eid: 12,
        name: '传统节日',
        name1:'ᠳᠣᠷᠠᠰᠬᠠᠯ ᠤᠨ ᠡᠳᠦᠷ',
        imageurl: '../../images/t4.png',
      },
      {
        eid: 13,
        name: '祭祀习俗',
        name1:'ᠲᠠᠬᠢᠯᠭ᠎ᠠ ᠵᠢᠨ ᠳᠠᠳᠬᠠᠯ',
        imageurl: '../../images/t5.png',
      }
    ],
    eItems3_1:[
      {
        eid: 14,
        name: '生活礼仪',
        name1:'ᠠᠮᠢᠳᠣᠷᠠᠯ ᠤᠨ ᠶᠣᠰᠣᠯᠠᠯ',
        imageurl: '../../images/t6.png'
      },
      {
        eid: 15,
        name: '出行习惯',
        name1:' ᠵᠠᠮ ᠬᠠᠷᠢᠯᠴᠠᠭ᠎ᠠ ᠤ ᠳᠠᠳᠬᠠᠯ',
        imageurl: '../../images/t7.png'
      }
    ],
    eItems3_2:[
      {
        eid: 16,
        name: '传统服饰',
        name1:'ᠣᠯᠣᠮᠵᠢᠯᠠᠯᠲᠦ ᠬᠣᠪᠴᠠᠰᠦ ᠵᠠᠰᠠᠯ',
        imageurl: '../../images/t8.png'
      },
      {
        eid: 17,
        name: '交流禁忌',
        name1:'ᠶᠠᠷᠢᠯᠴᠠᠭᠠᠨ ᠤ ᠴᠡᠭᠡᠷ',
        imageurl: '../../images/t9.png'
      }
    ],
    eItems4: [//礼仪习俗
      {
        eid: 18,
        name: '文化',
        name1:'ᠰᠣᠶᠣᠯ',
        imageurl: '../../images/w1.png',
      },
      {
        eid: 19,
        name: '艺术',
        name1:'ᠣᠷᠠᠯᠢᠭ',
        imageurl: '../../images/w2.png',
      }
    ]
  },
  superPage: function (e) {
    var that = this;
    var id = 0;
    id = e.currentTarget.dataset.id;
    var temp,temp1,temp2;
    if (id == 0) {
      temp = this.data.eItems;
    }
    else if (id == 1) {
      temp = this.data.eItems2;
    }
    else if (id == 2) {
      temp = this.data.eItems3;
    }
    else if (id == 3) {
      temp = this.data.eItems4;
    }
    this.setData({
      tempitems: temp,
      id: id
    });
  },
  onShareAppMessage: function () {
    return {
      title: "蒙果知",
      desc: "",
      path: `pages/finder/finder`
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
    var id = e.currentTarget.dataset.eid;
    if (id == 1)
      wx.navigateTo({
        url: "../eco/eco"
      })
    if (id == 10)
      wx.navigateTo({
        url: "../techan/techan"
      })
      if(id==9)
      wx.navigateTo({
        url:"../travel/travel"
      })

  }


})