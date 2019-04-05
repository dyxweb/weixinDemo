//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    name:"dyx",
    age:'',
    friends:[1,2,3,4],
    tabMonth: 4,
  },
  //事件处理函数
    getAge: function (e) {
      this.setData({
        age: e.detail.value
      })
    },
    goTop(){
      if (wx.pageScrollTo){
        wx.pageScrollTo({
          scrollTop: 0,
        })
      }
    },
    checkTab: function (e) {
      if (e.target.dataset.id == this.dataMonth) {
        return false;
      } else {
        this.setData({
          tabMonth: e.target.dataset.id
        })
      }
    }
  
})
