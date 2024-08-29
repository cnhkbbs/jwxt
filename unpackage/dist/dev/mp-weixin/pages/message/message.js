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
    this.prepareData();
  },
  methods: {
    async prepareData() {
      await this.loadUserData();
      this.getMessage();
    },
    getMessage() {
      common_vendor.index.showLoading({
        title: "加载中"
      });
      common_vendor.index.request({
        url: this.host_url + "message/",
        method: "POST",
        data: {
          username: this.username,
          token: this.token
        },
        success: (res) => {
          common_vendor.index.hideLoading();
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
          common_vendor.index.hideLoading();
          common_vendor.index.showToast({
            title: "网络错误",
            icon: "error"
          });
        }
      });
    },
    loadUserData() {
      const errors = [];
      return new Promise((resolve, reject) => {
        let tokenPromise = this.getStorageData("token", "token", errors);
        let usernamePromise = this.getStorageData("username", "username", errors);
        Promise.all([tokenPromise, usernamePromise]).then(() => {
          if (errors.length > 0) {
            common_vendor.index.navigateTo({
              url: "/pages/login/login"
            });
          } else {
            resolve();
          }
        }).catch((err) => {
          console.error("Promise.all failed with error:", err);
          reject(err);
        });
      });
    },
    getStorageData(key, dataName, errors) {
      return new Promise((resolve, reject) => {
        common_vendor.index.getStorage({
          key,
          success: (res) => {
            this[dataName] = res.data;
            resolve();
          },
          fail: (res) => {
            errors.push(`${key} data retrieval failed.`);
            resolve();
          }
        });
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/ycxy/pages/message/message.vue"]]);
wx.createPage(MiniProgramPage);
