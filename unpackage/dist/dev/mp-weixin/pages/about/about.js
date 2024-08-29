"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_link2 = common_vendor.resolveComponent("uni-link");
  const _easycom_uni_collapse_item2 = common_vendor.resolveComponent("uni-collapse-item");
  const _easycom_uni_collapse2 = common_vendor.resolveComponent("uni-collapse");
  (_easycom_uni_link2 + _easycom_uni_collapse_item2 + _easycom_uni_collapse2)();
}
const _easycom_uni_link = () => "../../uni_modules/uni-link/components/uni-link/uni-link.js";
const _easycom_uni_collapse_item = () => "../../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js";
const _easycom_uni_collapse = () => "../../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js";
if (!Math) {
  (_easycom_uni_link + _easycom_uni_collapse_item + _easycom_uni_collapse)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      href: "https://github.com/Remix-Design/remixicon/blob/master/License",
      text: "remixicon"
    }),
    b: common_vendor.p({
      href: "https://www.manypixels.co/gallery",
      text: "manypixels"
    }),
    c: common_vendor.p({
      title: "版权信息"
    }),
    d: common_vendor.p({
      title: "服务协议"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/ycxy/pages/about/about.vue"]]);
wx.createPage(MiniProgramPage);
