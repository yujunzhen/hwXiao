// pages/index/categoryList/shopDetail/shopDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    "id": "",
    "name": "大富豪客厅",
    "specifacal": "细腻",
    "introduce": "非洲黄花梨",
    "image": "http://localhost/image/banner_01.jpg",
    "series_id": "4",
    "type": "1"
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options.id);
    if (options.id){
      this.requestDetail(options.id);
    }
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

  },
  /**
   * 获取详情
   */
  requestDetail:function(id){
    var that = this;
      wx.request({
        url: 'http://localhost/PHP/shopDetail.php?id='+ id,
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data);
        that.setData({
        data:res.data.data,
        })
        
      },
      fail: function(res) {
        console.log(res);

      },
      complete: function(res) {
     

      },
    })
  },
})