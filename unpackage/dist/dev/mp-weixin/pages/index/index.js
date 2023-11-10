"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      cards: ["123456", "abcdefg", "一二三四五六七", "12346578", "12346579", "123465710", "123465711", "123465712", "123465713"]
    };
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.cards, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: item,
        c: "0f20e947-0-" + i0
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/wx_demo/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
