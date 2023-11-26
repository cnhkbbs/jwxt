"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      host_url: "",
      username: "",
      token: "",
      show_no_message: false,
      message: ""
    };
  },
  onLoad() {
    this.host_url = getApp().globalData.host_url;
    this.loadUserData();
  },
  onShow() {
    this.getMessage();
  },
  methods: {
    getMessage() {
      setTimeout(() => {
        common_vendor.index.request({
          url: this.host_url + "message",
          method: "POST",
          data: {
            username: this.username,
            token: this.token
          },
          success: (res) => {
            if (res.statusCode != 200 && this.token != "") {
              common_vendor.index.showToast({
                title: "登录信息过期",
                icon: "error"
              });
              setTimeout(() => {
                common_vendor.index.navigateTo({
                  url: "/pages/login/login"
                });
              }, 1e3);
            } else {
              if (res.data.count === 0) {
                this.show_no_message = true;
              } else {
                this.message = res.data.msg;
              }
            }
          },
          fail: (res) => {
            common_vendor.index.showToast({
              title: "网络错误",
              icon: "error"
            });
          }
        });
      }, 10);
    },
    loadUserData() {
      common_vendor.index.getStorage({
        key: "token",
        success: (res) => {
          this.token = res.data;
        },
        fail: (res) => {
          common_vendor.index.navigateTo({
            url: "/pages/login/login"
          });
        }
      });
      common_vendor.index.getStorage({
        key: "username",
        success: (res) => {
          this.username = res.data;
        },
        fail: (res) => {
          console.log("read username fail");
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.show_no_message,
    b: common_vendor.t($data.message),
    c: !$data.show_no_message
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/jwxt/pages/message/message.vue"]]);
wx.createPage(MiniProgramPage);
