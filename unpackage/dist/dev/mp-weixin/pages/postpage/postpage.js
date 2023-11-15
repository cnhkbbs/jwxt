"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  onShow() {
    this.getPostContent();
  },
  data() {
    return {
      title: "",
      post_content: {}
    };
  },
  onLoad(opt) {
    this.title = opt.title;
  },
  methods: {
    getPostContent() {
      common_vendor.index.request({
        url: "http://127.0.0.1:5000/posts/content",
        method: "POST",
        data: {
          post_title: this.title
        },
        success: (res) => {
          let res_data = res.data;
          res_data = res_data["content"];
          res_data = res_data.replace(/\n/g, "\n");
          const post_content = res_data;
          this.$set(this, "post_content", post_content);
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
    b: common_vendor.t($data.post_content)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderProjects/jwxt/pages/postpage/postpage.vue"]]);
wx.createPage(MiniProgramPage);
