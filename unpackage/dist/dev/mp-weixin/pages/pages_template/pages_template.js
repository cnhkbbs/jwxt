"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      host_url: "",
      token: ""
    };
  },
  onLoad() {
    this.host_url = getApp().globalData.host_url;
    common_vendor.index.getStorage({
      key: "token",
      success: function(res) {
        this.token = res.data;
      },
      fail: (res) => {
        common_vendor.index.navigateTo({
          url: "/pages/login/login"
        });
      }
    });
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/acer/Desktop/temp/pages/pages_template/pages_template.vue"]]);
wx.createPage(MiniProgramPage);
