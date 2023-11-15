"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
<<<<<<< HEAD
  onShow() {
    this.getPostList();
  },
  onLoad() {
  },
  data() {
    return {
      postList: []
    };
  },
  methods: {
    goToPostPage(title) {
      common_vendor.index.navigateTo({
        url: "/pages/postpage/postpage?title=" + title
      });
    },
    getPostList() {
      common_vendor.index.request({
        url: "http://127.0.0.1:5000/posts/list",
        method: "POST",
        success: (res) => {
          const postList = res.data;
          this.$set(this, "postList", postList);
        },
        fail: (err) => {
          console.error("请求失败", err);
        }
      });
    }
  }
=======
  data() {
    return {
      title: "Hello",
      cards: ["123456", "abcdefg", "一二三四五六七", "12346578", "12346579", "123465710", "123465711", "123465712", "123465713"]
    };
  },
  onLoad() {
  },
  methods: {}
>>>>>>> 98e8539665192c3b40d2041a68497eacddd1e3b7
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
<<<<<<< HEAD
    a: common_vendor.f($data.postList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: index,
        c: common_vendor.o(($event) => $options.goToPostPage(item.title), index),
        d: "0094297b-0-" + i0,
        e: common_vendor.p({
          cover: item.cover
        })
=======
    a: common_vendor.f($data.cards, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: item,
        c: "0f20e947-0-" + i0
>>>>>>> 98e8539665192c3b40d2041a68497eacddd1e3b7
      };
    })
  };
}
<<<<<<< HEAD
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderProjects/jwxt/pages/index/index.vue"]]);
=======
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/wx_demo/pages/index/index.vue"]]);
>>>>>>> 98e8539665192c3b40d2041a68497eacddd1e3b7
wx.createPage(MiniProgramPage);
