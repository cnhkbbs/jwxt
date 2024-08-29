"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  onShow() {
    this.getPostContent();
  },
  data() {
    return {
      title: "",
      host_url: "",
      post_data: ""
    };
  },
  onLoad(opt) {
    this.title = opt.title;
    this.host_url = getApp().globalData.host_url;
  },
  methods: {
    getPostContent() {
      common_vendor.index.request({
        url: this.host_url + "posts/content",
        method: "POST",
        data: {
          post_title: this.title
        },
        success: (res) => {
          this.post_data = res.data;
        },
        fail: (err) => {
          console.error("err", err);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title),
    b: common_vendor.t($data.post_data.author),
    c: $data.post_data.cover,
    d: common_vendor.t($data.post_data.content)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/ycxy/pages/postpage/postpage.vue"]]);
wx.createPage(MiniProgramPage);
