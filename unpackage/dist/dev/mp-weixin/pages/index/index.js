"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  onShow() {
    this.getPostList();
  },
  onLoad() {
    common_vendor.index.getStorage({
      key: "token",
      success: function(res) {
        console.log(res.data);
      },
      fail: (res) => {
        common_vendor.index.navigateTo({
          url: "/pages/login/login"
        });
      }
    });
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
    a: common_vendor.f($data.postList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: index,
        c: common_vendor.o(($event) => $options.goToPostPage(item.title), index),
        d: "6198981e-0-" + i0,
        e: common_vendor.p({
          cover: item.cover
        })
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/acer/Desktop/temp/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
